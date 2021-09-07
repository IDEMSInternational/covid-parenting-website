import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Language } from '../tip-sheets/tip-sheets.model';
import { TipSheetService } from '../tip-sheets/tip-sheet.service';

@Component({
  selector: 'app-tips-lang-select',
  templateUrl: './tips-lang-select.component.html',
  styleUrls: ['./tips-lang-select.component.scss']
})
export class TipsLangSelectComponent implements OnInit, OnChanges {

  @Output() onLanguageChange: EventEmitter<Language> = new EventEmitter();
  @Input() currentLanguage: Language = { type: 1, code: "en", name: "English" };
   languages: Language[] = [{ type: 1, code: "en", name: "English" }];
  selectedRange: string[] = ["C", "F"]; //should always be contained in the letter ranges
  letterRanges: string[][] = [["A", "B"], ["C", "F"], ["G", "J"], ["K", "L"], ["M", "P"], ["R", "S"], ["T", "Z"], ["OTHERS", ""]];
  dropdownLanguages: Language[] = [];

  constructor(private tipSheetService: TipSheetService) {
   
    this.tipSheetService.getLanguages().subscribe((languages) => {
      this.languages = languages;
    });

   }

  ngOnChanges(changes: SimpleChanges): void {

     if (changes.currentLanguage) {
      let newCurrentLanguage: Language = changes.currentLanguage.currentValue;
      let newLetterRange: string[][] = this.letterRanges.filter((range) => {
        return newCurrentLanguage.name.toLowerCase()[0] == range[0].toLowerCase();
      });

      if (newLetterRange.length > 0){
        this.onLetterRangeClick(newLetterRange[0], newCurrentLanguage, true);
      }else{
        this.onLetterRangeClick(this.selectedRange, newCurrentLanguage, true);
      }

    }

  }

  ngOnInit(): void {
  }

  onLetterRangeClick(range: string[], currentLanguage: Language = null, changeLang: boolean = true) {
    //for "others" do differently
    let bType2: boolean = (range[0] === "OTHERS");
    let lowerLetter: string;
    let higherLetter: string;


    if (!bType2) {
      lowerLetter = range[0].toLowerCase();
      higherLetter = range[1].toLowerCase();
    }

    let firstLetter: string;
    this.dropdownLanguages = this.languages.filter((lang) => {
      if (bType2) {
        return lang.type === 2;
      } else {
        firstLetter = lang.name.toLowerCase()[0];
        return firstLetter >= lowerLetter && firstLetter <= higherLetter;
      }

    });



    this.selectedRange = range;
    if (changeLang && this.dropdownLanguages.length > 0) {
      if (currentLanguage == null) {
        this.currentLanguage = this.dropdownLanguages[0];
      } else {
        this.currentLanguage = this.currentLanguage;
      }
      this.onLanguageChange.emit(this.currentLanguage);
    }

  }//end method

  onLanguageClick(language: Language) {
    this.currentLanguage = language;
    this.onLanguageChange.emit(language);
  }


}
