export interface BetaCodeRedeemInput {
  betaCode: string;
}

export interface BetaCodeFilterOneInput {
  id?: number;
  betaCode?: number;
}

export interface BetaCodeFilterManyInput {
  ids?: number[];
  betaCodes?: number[];
  userIDs?: number[];
}