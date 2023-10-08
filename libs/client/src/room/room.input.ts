export interface RoomFilterOneInput {
  id: number;
}

export interface RoomFilterManyInput {
  ids?: number[];
  userIDs?: number[];
  skip?: number;
  limit?: number;
}