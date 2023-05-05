export interface WordFilterCreateInputDTO {
  word?: string;
  replacement?: string;
}

export type WordFilterUpdateInputDTO = Partial<WordFilterCreateInputDTO>;
