export interface SessionWire {
  id: number;
  userID?: number;
  accessToken?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface SessionCreatedWire {
  id: number;
  userID?: number;
  accessToken?: string;
}
