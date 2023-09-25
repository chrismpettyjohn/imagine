export interface RankCreateInputDTO {
  name: string;
  badgeCode: string;
  backgroundColor: string;
}

export interface RankUpdateInputDTO {
  name?: string;
  badgeCode?: string;
  backgroundColor?: string;
}
