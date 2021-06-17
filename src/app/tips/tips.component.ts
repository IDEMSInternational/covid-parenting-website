import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../tip-sheets/tip-sheets.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TipSheetService } from '../tip-sheets/tip-sheet.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent {

  public tipSheetLang: Language = {
    type: 1,
    code: "en",
    name: "English"
  };

  constructor(private route: ActivatedRoute, private tipSheetService: TipSheetService, private router: Router) {

    this.route.params.subscribe((paramMap) => {
      if (paramMap["langCode"]) {
        this.tipSheetService.getLanguageByTypeAndCode(paramMap["langCode"])
          .subscribe((lang) => {
            if (lang) {
              this.changeTipSheetlanguage(lang);
            }
          });
      }
    });

    //this.redirectUsingQueryParam();
  }

  public onLanguageChange(lang: Language) {
    //only change the url when there is an actual language change. Prevents 'infinite'n looping of events
    if (this.tipSheetLang.name !== lang.name) {
      this.router.navigateByUrl("/tips/" + lang.type + lang.code, { state: { noScroll: true } });
    }

  }

  private changeTipSheetlanguage(lang: Language) {
    //only make a change if there is an actual change 
    if (this.tipSheetLang.name !== lang.name) {
      this.tipSheetLang = lang;
    }

  }

  //No longer used. left here for future refernce. not used because for now query parameters are not used
  private redirectUsingQueryParam() {
    this.route.queryParams.subscribe((paramMap) => {
      if (paramMap["langCode"]) {
        this.tipSheetService.getLanguageByTypeAndCode(paramMap["langCode"])
          .subscribe((lang) => {
            if (lang) {
              this.router.navigateByUrl("/tips/" + lang.code);
            }
          });
      } else if (paramMap["langName"]) {
        this.tipSheetService.searchForLanguageByName(paramMap["langName"])
          .subscribe((lang) => {
            if (lang) {
              this.router.navigateByUrl("/tips/" + lang.code);
            }
          });
      }
    });
  }

}
