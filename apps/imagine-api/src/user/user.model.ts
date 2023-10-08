import {Field, ObjectType} from '@nestjs/graphql';
import {UserGender, UserOnlineStatus, UserWire} from '@imagine-cms/types';

@ObjectType()
export class UserModel implements UserWire {
  @Field({nullable: true})
  id!: number;

  @Field(() => String, {nullable: true})
  username!: string;

  // TODO: Add Privacy Guard
  @Field({nullable: true})
  email?: string;

  @Field({nullable: true})
  rankID!: number;

  @Field(() => Number, {nullable: true})
  credits!: number;

  @Field(() => Number, {nullable: true})
  vipPoints!: number;

  @Field(() => Number, {nullable: true})
  activityPoints!: number;

  @Field(() => String, {nullable: true})
  look!: string;

  @Field(() => UserGender, {nullable: true})
  gender!: UserGender;

  @Field(() => String, {nullable: true})
  motto!: string;

  @Field(() => Number, {nullable: true})
  accountCreatedAt!: number;

  @Field(() => UserOnlineStatus, {nullable: true})
  onlineStatus!: UserOnlineStatus;

  @Field(() => Number, {nullable: true})
  lastOnlineAt!: number;

  @Field(() => Number, {nullable: true})
  homeRoomID!: number;

  @Field(() => String, {nullable: true})
  discordID?: string;

  @Field(() => String, {nullable: true})
  facebookID?: string;

  @Field(() => String, {nullable: true})
  googleID?: string;

  @Field(() => String, {nullable: true})
  language?: string;
}
