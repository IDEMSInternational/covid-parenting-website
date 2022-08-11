import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { Language, TipSheet, LanguageCSVRow } from './tip-sheets.model';
import { TipSheetService } from './tip-sheet.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ResourcesService } from '../resources.service';

@Component({
  selector: 'app-tip-sheets',
  templateUrl: './tip-sheets.component.html',
  styleUrls: ['./tip-sheets.component.scss']
})
export class TipSheetsComponent implements OnInit, OnChanges {
  @Input()
  currentLanguage: Language;
  @Input()
  viewAllTipSheets: boolean = true;//was originally false. used to indicate if the component will show all tipsheets
  @Input()
  maxTipSheetsToShow: number = 5;//was originally 6 cause of flex wrap. used to show tipsheets in batches

  tipSheetsByLanguage: { [langCode: string]: TipSheet[] } = {};

  tipSheets: TipSheet[] = [];//holds all the tipsheets from the server
  visibleTipSheets: TipSheet[] = [];//holds the tipsheets being view
  showloadMoreButton: boolean = false;
  tipSheetsSubscription: Subscription;


  constructor(private tipSheetService: TipSheetService, private resourcesService: ResourcesService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.currentLanguage) {
      this.changeLanguage(changes.currentLanguage.currentValue);
    }
  }

  private changeLanguage(language: Language) {

    this.currentLanguage = language;
    if (this.tipSheetsSubscription) {
      this.tipSheetsSubscription.unsubscribe();
    }
    this.tipSheetsSubscription = this.tipSheetService.getTipSheetsByTypeAndCode(language.type + language.code).subscribe((sheets) => {
      this.tipSheets = sheets;
      this.visibleTipSheets = [];
      if (this.viewAllTipSheets) {
        this.visibleTipSheets = this.tipSheets;
      } else {
        this.onClickViewMoreTipSheets()
      }

      //fetch all resources  with selected language
      this.fetchAndOtherResources(language.code);
    });
  }

  //used by the view more button and when the tip sheets are to to be view in batches
  public onClickViewMoreTipSheets() {
    let startIndex: number;

    if (this.visibleTipSheets.length == 0) {
      startIndex = 0;
    } else {
      if (this.visibleTipSheets.length < this.tipSheets.length) {
        startIndex = this.visibleTipSheets.length;   //from last added
      } else {
        return;
      }
    }

    this.addElementsToVisibleTipSheets(startIndex);
    this.showloadMoreButton = this.visibleTipSheets.length < this.tipSheets.length;
  }

  private addElementsToVisibleTipSheets(startIndex: number) {
    let index: number;
    let counter: number = 0;
    for (index = startIndex; index < this.tipSheets.length; index++) {
      if (counter == this.maxTipSheetsToShow) {
        break;
      }
      this.visibleTipSheets.push(this.tipSheets[index]);
      counter++;
    }
  }


  public objMergedTipsheet: TipSheet = null;
  public arrOtherResources: TipSheet[] = null;

  private fetchAndOtherResources(langCode: string) {

    this.objMergedTipsheet = null;
    this.arrOtherResources = null;

    this.resourcesService.fetchResourcesByLanguage(langCode).subscribe((langResources) => {
      let strResourceType: string;
      let objResourceSheet: TipSheet;
      this.arrOtherResources = [];

      langResources.forEach((row) => {
        strResourceType = row.resourceType.toLowerCase();
        objResourceSheet = {
          title: row.resourceTitle,
          thumnailSrc: "",
          pdfSrc: ""
        };

        if (strResourceType === "mergedtipsheet") {
          objResourceSheet.pdfSrc = `assets/tip_sheets/${row.resourceLanguageCode}/${row.resourceFilePrefix}.pdf`;
          this.objMergedTipsheet = objResourceSheet;
          return;
        } else if (strResourceType === "caseworkers") {
          objResourceSheet.pdfSrc = `assets/resources/caseworkers/${row.resourceFilePrefix}.pdf`;
        } else if (strResourceType === "psa" || strResourceType === "psahowto") {
          objResourceSheet.pdfSrc = `assets/resources/psas/${row.resourceFilePrefix}.pdf`;
        } else if (strResourceType === "faithbased") {
          objResourceSheet.pdfSrc = `assets/resources/faithbased/${row.resourceFilePrefix}.pdf`;
        }
        else if (strResourceType === "socialmedia") {
          objResourceSheet.pdfSrc = `assets/resources/socialmedia/${row.resourceFilePrefix}.docx`;
        } else {
          return;
        }

        this.arrOtherResources.push(objResourceSheet);
      });

      //if other resources not there. set to null
      if (this.arrOtherResources.length == 0) {
        this.arrOtherResources = null;
      }
    });
  }

  public openTipSheetPDF(tipSheet: TipSheet) {
    window.open(tipSheet.pdfSrc, "__blank");
  }

}
