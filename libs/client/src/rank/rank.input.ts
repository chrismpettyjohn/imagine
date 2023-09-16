import { RankScopesWire } from "@imagine-cms/types";

export interface RankFilterManyInput {
  ids?: number;
  showStaffOnly?: boolean;
  limit?: number;
}

export interface RankFilterOneInput {
  id: number;
}

export interface RankCreateOneInput {
  name: string;
  badgeCode: string;
  scopes: RankScopesWire;
  siteShowStaff: boolean;
}

export type RankUpdateInput = Partial<RankCreateOneInput>;