import {registerEnumType} from '@nestjs/graphql';

export enum UserGender {
  Male = 'M',
  Female = 'F',
}

registerEnumType(UserGender, {
  name: 'UserGender',
});

export enum UserOnlineStatus {
  Online = '1',
  Offline = '0',
}

registerEnumType(UserOnlineStatus, {
  name: 'UserOnlineStatus',
});

export enum UserMuteStatus {
  IsMuted = '1',
  NotMuted = '0',
}

registerEnumType(UserMuteStatus, {
  name: 'UserMuteStatus',
});

export enum UserAllowingNewFriendsStatus {
  Yes = '1',
  No = '0',
}

registerEnumType(UserAllowingNewFriendsStatus, {
  name: 'UserAllowingNewFriendsStatus',
});

export enum UserShowOnlineStatus {
  Hidden = '1',
  Visible = '0',
}

registerEnumType(UserShowOnlineStatus, {
  name: 'UserShowOnlineStatus',
});

export enum UserShowRoomStatus {
  Hidden = '1',
  Visible = '0',
}

registerEnumType(UserShowRoomStatus, {
  name: 'UserShowRoomStatus',
});

export enum UserVipStatus {
  Yes = '1',
  No = '0',
}

registerEnumType(UserVipStatus, {
  name: 'UserVipStatus',
});
