import { RankFlagsWire, RankScopesWire } from "@imagine-cms/types";

export interface RankFilterManyInput {
  ids?: number;
  staffOnly?: boolean;
  limit?: number;
}

export interface RankFilterOneInput {
  id: number;
}

export interface RankCreateOneInput {
  name: string;
  badgeCode: string;
  scopes: RankScopesWire;
  flags: RankFlagsWire;
}

export type RankUpdateInput = Partial<RankCreateOneInput>;