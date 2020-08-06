import { Component, OnInit } from '@angular/core';
import {  TipSheet } from '../tip-sheets/tip-sheets.model';
@Component({
  selector: 'app-caseworkers',
  templateUrl: './caseworkers.component.html',
  styleUrls: ['./caseworkers.component.scss']
})
export class CaseworkersComponent implements OnInit {

  tipsheets: TipSheet[] = [];//holds all the contribtors from the server
  visibleTipSheets: TipSheet[] = [];//holds the contribtors being view
  showloadMoreButton: boolean = false;
  maxContributorsToShow: number = 9;//used to show contributors in batches

  constructor() {
    //load the contributors
    //todo. this will eventually be inside a call back
    this.tipsheets = CONTRIBUTORS_LIST;
    this.visibleTipSheets = [];
    this.viewMoreTipSheets();
  }

  ngOnInit(): void { }

  //used by the view more button and when the tip sheets are to to be view in batches
  public viewMoreTipSheets() {
    if (this.visibleTipSheets.length == 0) {
        this.addElementsToVisibleContributors(0);
      } else if (this.visibleTipSheets.length > 0) {
        if (this.visibleTipSheets.length < this.tipsheets.length) {
          //from last added  
          this.addElementsToVisibleContributors(this.visibleTipSheets.length );
        }//end inner if
      }//end if
  
      this.showloadMoreButton = this.visibleTipSheets.length < this.tipsheets.length;
    }//end method
  
    private addElementsToVisibleContributors(startIndex: number) {
      let index: number;
      let counter: number = 0;
      for (index = startIndex; index < this.tipsheets.length; index++) {
        if (counter == this.maxContributorsToShow) {
          break;
        }//end if 
        this.visibleTipSheets.push(this.tipsheets[index]);
        counter++;
      }//end for loop
    }//end method

}//end class 

//todo. these will come remotely from a service
const CONTRIBUTORS_LIST: TipSheet[] = [
   { title: "Tips for caseworkers in English", thumnailSrc: "", pdfSrc: "assets/caseworkers/caseworkers_English.pdf" },
   { title: "Tips for caseworkers in Spanish", thumnailSrc: "", pdfSrc: "assets/caseworkers/caseworkers_Spanish.pdf" },
   { title: "Tips for caseworkers in French", thumnailSrc: "", pdfSrc: "assets/caseworkers/caseworkers_French.pdf" }
  ];

