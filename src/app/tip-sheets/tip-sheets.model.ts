export type LanguageCSVRow = {
    languageType: number; //type 1 is English name, type 2 is English alternatives, type 3 is non English characters names
    languageCode: string;
    languageName: string;
    tipSheetNumber: number;
    title: string;
};

export type Language = {
    type: number;
    code: string;
    name: string;    
};

export type TipSheet = {
    title: string;
    thumnailSrc: string;
    pdfSrc: string;
};