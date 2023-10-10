import { FurnitureValueType } from "../furniture/furniture.fragment";

export interface UserFurnitureFilterOneInput {
  id: number;
}

export interface UserFurnitureFilterManyInput {
  ids?: number[];
  userIDs?: number[];
  roomIDs?: number[];
  itemIDs?: number[];
  valueTypes?: FurnitureValueType[];
  skip?: number;
  limit?: number;
}