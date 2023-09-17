export interface UserTradeLogFilterOneInput {
  id: number;
}

export interface UserTradeLogFilterManyInput {
  ids?: number[];
  userOneIDs?: number[];
  userTwoIDs?: number[];
  limit?: number;
}