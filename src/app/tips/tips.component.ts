import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpreadsheetService } from '../shared/services/spreadsheet.service';

export type LanguageCSVRow = {
  languageCode: string,
  languageName: string,
  tipSheetNumber: number,
  title: string
};

type Language = { name: string, code: string };
type TipSheet = { title: string, thumnailSrc: string; pdfSrc: string }

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit {

  allLanguages: Language[] = [];

  tipSheetsByLanguage: { [languageCode: string]: TipSheet } = {
    
  };

  currentLanguage: Language = {
    code: "en",
    name: "English"
  };

  tipSheets: { title: string, thumnailSrc: string; pdfSrc: string }[] = [];

  constructor(private http: HttpClient, private spreadsheetService: SpreadsheetService) {
    this.fetchTipSheets();
  }

  fetchTipSheets(){
    this.spreadsheetService.getCSVObjects("/assets/tip_sheets/tipSheetNames.csv").subscribe((rows: LanguageCSVRow[]) => {
      let currentLanguageRows = rows.filter((row) => row.languageCode === this.currentLanguage.code);
      let langNamesByCode = {}    
      this.allLanguages = [];
      this.tipSheets = currentLanguageRows.map((row) => {
               langNamesByCode[row.languageCode] = row.languageName;
        return {
          title: row.title,
          thumnailSrc: `/assets/images/tip_sheet_thumbnails/${row.tipSheetNumber}.webp`,
          pdfSrc: `/assets/tip_sheets/${this.currentLanguage.code}/${row.tipSheetNumber}.pdf`
        };
      })
      Object.keys(langNamesByCode).forEach((code) =>{
        this.allLanguages.push({ code: code, name: langNamesByCode[code]}) 
      })
    });
  }

  changeLanguage(language: Language) {
    this.currentLanguage = language;
    this.fetchTipSheets();
  }

  ngOnInit(): void {
  }

}
