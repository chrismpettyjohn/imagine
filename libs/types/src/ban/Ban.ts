export interface BanWire {
  id?: number;
  bannedUserID?: number;
  addedByUserID?: number;
  type?: string;
  reason?: string;
  createdAt?: string;
  expiresAt?: string;
}
