import {UserModel} from '../user/user.model';
import {RoomModel} from '../room/room.model';
import {ChatlogWire} from '@imagine-cms/types';
import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class ChatlogModel implements ChatlogWire {
  @Field({nullable: true})
  id?: number;

  @Field({nullable: true})
  userID?: number;

  @Field(() => UserModel, {nullable: true})
  user?: UserModel;

  @Field({nullable: true})
  roomID?: number;

  @Field(() => RoomModel, {nullable: true})
  room?: RoomModel;

  @Field({nullable: true})
  message?: string;

  @Field({nullable: true})
  createdAt?: string;
}
