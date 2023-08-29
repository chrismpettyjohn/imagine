export enum LanguagePhraseType {
  Site = 'site',
  Game = 'game',
}

export interface LanguagePhraseWire {
  id: number;
  key: string;
  type: LanguagePhraseType;
  description: string;
  createdAt: number;
}
