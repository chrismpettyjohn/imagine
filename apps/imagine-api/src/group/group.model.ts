import {UserModel} from '../user/user.model';
import {GroupWire} from '@imagine-cms/types';
import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class GroupModel implements GroupWire {
  @Field({nullable: true})
  id?: number;

  @Field({nullable: true})
  name?: string;

  @Field({nullable: true})
  description?: string;

  @Field({nullable: true})
  badge?: string;

  @Field({nullable: true})
  userID?: number;

  @Field(() => UserModel, {nullable: true})
  user?: UserModel;
}
