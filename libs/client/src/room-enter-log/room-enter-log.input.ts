export interface RoomEnterLogFilterOneInput {
  id: number;
}

export interface RoomEnterLogFilterManyInput {
  ids?: number[];
  roomIDs?: number[];
  userIDs?: number[];
  limit?: number;
}