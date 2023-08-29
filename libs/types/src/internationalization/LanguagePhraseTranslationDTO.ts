export interface LanguagePhraseTranslationDTO {
  languageID: number;
  languagePhraseID: number;
  translation: string;
}

export interface LanguagePhraseTranslationBulkDTO {
  translations: LanguagePhraseTranslationDTO[];
}

export interface LanguagePhraseTranslationFiltersDTO {
  languageID?: number;
  languagePhraseID?: number;
}

export interface LanguagePhraseTranslationImportDTO {
  languageID: number;
  externalTextsMediaID: number;
}
