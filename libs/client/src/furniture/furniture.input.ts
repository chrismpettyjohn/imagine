import { FurnitureValueType } from "./furniture.fragment";

export enum FurnitureOrderBy {
  GREATEST_VALUE_TYPE = 'GREATEST_VALUE_TYPE',
  RECENTLY_ADDED = 'RECENTLY_ADDED'
}

export interface FurnitureFilterManyInput {
  ids?: number[];
  publicName?: string;
  itemName?: string;
  valueTypes?: FurnitureValueType[];
  orderBy?: FurnitureOrderBy[];
  limit?: number;
}


export interface FurnitureFilterOneInput {
  id: number;
}