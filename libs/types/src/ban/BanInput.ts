export interface BanCreateInputDTO {
  bannedUserID: number;
  reason: string;
  expiresAt: string;
}

export type BanUpdateInputDTO = Partial<BanCreateInputDTO>;
