export interface UserPinnedFurnitureFilterOneInput {
  id: number;
}

export interface UserPinnedFurnitureFilterManyInput {
  ids?: number[];
  furnitureIDs?: number[];
  skip?: number;
  limit?: number;
}


export interface UserPinnedFurnitureCreateInput {
  furnitureID: number;
}