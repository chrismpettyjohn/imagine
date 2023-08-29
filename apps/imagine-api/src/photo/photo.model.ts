import {UserModel} from '../user/user.model';
import {PhotoWire} from '@imagine-cms/types';
import {RoomModel} from '../room/room.model';
import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class PhotoModel implements PhotoWire {
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
  photoURL?: string;

  @Field({nullable: true})
  createdAt?: number;
}
