export interface FurniturePurchaseLogOverviewFilterOneInput {
  furnitureID: number;
}

export interface FurniturePurchaseLogOverviewFilterManyInput {
  skip?: number;
  limit?: number;
}

export interface FurniturePurchaseLogOverviewAverageSellsForTimeRangeInput {
  furnitureID?: number;
  startDate: number;
  endDate: number;
}