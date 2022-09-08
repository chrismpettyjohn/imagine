import {UserModel} from '../user/user.model';
import {RoomWire} from '@imagine-cms/types';
import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class RoomModel implements RoomWire {
  @Field({nullable: true})
  id?: number;

  @Field({nullable: true})
  name?: string;

  @Field({nullable: true})
  description?: string;

  @Field({nullable: true})
  userID?: number;

  @Field(() => UserModel, {nullable: true})
  user?: UserModel;

  @Field({nullable: true})
  usersNow?: number;

  @Field({nullable: true})
  usersMax?: number;
}
