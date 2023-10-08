export interface FurniturePurchaseLogFilterOneInput {
  id: number;
}

export interface FurniturePurchaseLogFilterManyInput {
  ids?: number[];
  furnitureIDs?: number[];
  itemIDs?: number[];
  userIDs?: number[];
  skip?: number;
  limit?: number;
}