import {WordFilterBannableStatus, WordFilterStrictStatus} from './WordFilter';

export interface WordFilterCreateInputDTO {
  word?: string;
  replacement?: string;
  strict?: WordFilterStrictStatus;
  bannable?: WordFilterBannableStatus;
}

export type WordFilterUpdateInputDTO = Partial<WordFilterCreateInputDTO>;
