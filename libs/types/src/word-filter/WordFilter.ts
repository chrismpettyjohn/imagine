export enum WordFilterStrictStatus {
  Strict = '1',
  NotStrict = '0',
}

export enum WordFilterBannableStatus {
  Bannable = '1',
  NotBannable = '0',
}

export interface WordFilterWire {
  id?: number;
  word?: string;
  replacement?: string;
  strict?: WordFilterStrictStatus;
  addedby?: string;
  bannable?: WordFilterBannableStatus;
}
