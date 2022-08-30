export interface RankCreateInputDTO {
  name: string;
  description: string;
  badgeCode: string;
}

export interface RankUpdateInputDTO {
  name?: string;
  description?: string;
  badgeCode?: string;
}
