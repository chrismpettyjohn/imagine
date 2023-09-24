import { UserWire, UserGender, UserOnlineStatus } from "@imagine-cms/types";

export const MOCK_USER: UserWire = {
  id: 0,
  username: 'Guest',
  email: '',
  credits: 0,
  vipPoints: 0,
  accountCreatedAt: 0,
  motto: 'Join or create an account today',
  gameSSO: '',
  rankID: -1,
  activityPoints: 0,
  look: '-',
  gender: UserGender.Male,
  onlineStatus: UserOnlineStatus.Offline,
  ipLast: '-1',
  ipRegistered: '-1',
  homeRoomID: -1,
}
