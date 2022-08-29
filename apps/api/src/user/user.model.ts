import {RankModel} from '../rank/rank.model';
import {Field, ID, ObjectType} from '@nestjs/graphql';
import {SessionModel} from '../session/session.model';
import {
  UserAllowingNewFriendsStatus,
  UserGender,
  UserMuteStatus,
  UserOnlineStatus,
  UserShowOnlineStatus,
  UserVipStatus,
} from '../database/user.types';
@ObjectType()
export class UserModel {
  @Field(() => ID)
  id!: string;

  @Field({nullable: true})
  username!: string;

  // TODO: Add Privacy Guard
  @Field({nullable: true})
  email!: string;

  // TODO: Add Privacy Guard
  @Field({nullable: true})
  gameSSO!: string;

  @Field(() => ID, {nullable: true})
  rankID!: number;

  @Field(() => RankModel, {nullable: true})
  rank?: RankModel;

  @Field({nullable: true})
  rankVipID!: string;

  @Field(() => RankModel, {nullable: true})
  rankVip?: RankModel;

  @Field({nullable: true})
  credits!: number;

  @Field({nullable: true})
  vipPoints!: number;

  @Field({nullable: true})
  activityPoints!: number;

  @Field({nullable: true})
  look!: string;

  @Field(() => UserGender, {nullable: true})
  gender!: UserGender;

  @Field({nullable: true})
  motto!: string;

  @Field({nullable: true})
  accountCreatedAt!: string;

  @Field({nullable: true})
  lastOnline!: string;

  @Field(() => UserOnlineStatus, {nullable: true})
  onlineStatus!: UserOnlineStatus;

  @Field({nullable: true})
  ipRegisteredWith!: string;

  @Field({nullable: true})
  homeRoomID!: string;

  @Field(() => UserMuteStatus, {nullable: true})
  muteStatus!: UserMuteStatus;

  @Field(() => UserAllowingNewFriendsStatus, {nullable: true})
  allowingNewFriends!: UserAllowingNewFriendsStatus;

  @Field(() => UserShowOnlineStatus, {nullable: true})
  showOnlineStatus!: UserShowOnlineStatus;

  @Field(() => UserVipStatus, {nullable: true})
  vipStatus!: UserVipStatus;

  @Field(() => [SessionModel], {nullable: true})
  sessions?: SessionModel[];
}
