import {UserModel} from '../user/user.model';
import {BadgeWire} from '@imagine-cms/types';
import {Field, ID, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class BadgeModel implements BadgeWire {
  @Field(() => ID)
  id!: number;

  @Field({nullable: true})
  code?: string;
}
