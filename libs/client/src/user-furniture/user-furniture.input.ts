export interface UserFurnitureFilterOneInput {
  id: number;
}

export interface UserFurnitureFilterManyInput {
  ids?: number[];
  userIDs?: number[];
  roomIDs?: number[];
  itemIDs?: number[];
  skip?: number;
  limit?: number;
}