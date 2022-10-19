import {RankModel} from '../rank/rank.model';
import {Field, ObjectType} from '@nestjs/graphql';
import {SessionModel} from '../session/session.model';
import {
  UserAllowingNewFriendsStatus,
  UserGender,
  UserMuteStatus,
  UserOnlineStatus,
  UserShowOnlineStatus,
  UserVipStatus,
  UserWire,
} from '@imagine-cms/types';

@ObjectType()
export class UserModel implements UserWire {
  @Field({nullable: true})
  id?: number;

  @Field(() => String, {nullable: true})
  username?: string;

  // TODO: Add Privacy Guard
  @Field({nullable: true})
  email?: string;

  // TODO: Add Privacy Guard
  @Field(() => String, {nullable: true})
  gameSSO?: string;

  @Field({nullable: true})
  rankID?: number;

  @Field(() => RankModel, {nullable: true})
  rank?: RankModel;

  @Field({nullable: true})
  rankVipID?: number;

  @Field(() => RankModel, {nullable: true})
  rankVip?: RankModel;

  @Field(() => Number, {nullable: true})
  credits?: number;

  @Field(() => Number, {nullable: true})
  vipPoints?: number;

  @Field(() => Number, {nullable: true})
  activityPoints?: number;

  @Field(() => String, {nullable: true})
  look?: string;

  @Field(() => UserGender, {nullable: true})
  gender?: UserGender;

  @Field(() => String, {nullable: true})
  motto?: string;

  @Field(() => Number, {nullable: true})
  accountCreatedAt?: number;

  @Field(() => Number, {nullable: true})
  lastOnline?: number;

  @Field(() => UserOnlineStatus, {nullable: true})
  onlineStatus?: UserOnlineStatus;

  @Field(() => String, {nullable: true})
  ipRegisteredWith?: string;

  @Field(() => Number, {nullable: true})
  homeRoomID?: number;

  @Field(() => UserMuteStatus, {nullable: true})
  muteStatus?: UserMuteStatus;

  @Field(() => UserAllowingNewFriendsStatus, {nullable: true})
  allowingNewFriends?: UserAllowingNewFriendsStatus;

  @Field(() => UserShowOnlineStatus, {nullable: true})
  showOnlineStatus?: UserShowOnlineStatus;

  @Field(() => UserVipStatus, {nullable: true})
  vipStatus?: UserVipStatus;

  @Field(() => [SessionModel], {nullable: true})
  sessions?: SessionModel[];
}
