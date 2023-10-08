import { FurnitureValueType } from "./furniture.fragment";

export enum FurnitureOrderBy {
  GREATEST_VALUE_TYPE = 'GREATEST_VALUE_TYPE',
}

export interface FurnitureFilterManyInput {
  ids?: number[];
  valueTypes: FurnitureValueType[];
  orderBy?: FurnitureOrderBy[];
}


export interface FurnitureFilterOneInput {
  id: number;
}