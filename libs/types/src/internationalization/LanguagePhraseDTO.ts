import {LanguagePhraseType} from './LanguagePhrase';

export interface LanguagePhraseDTO {
  key: string;
  type: LanguagePhraseType;
  description: string;
}

export interface LanguagePhraseFiltersDTO {
  type: LanguagePhraseType;
}
