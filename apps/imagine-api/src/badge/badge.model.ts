import {UserModel} from '../user/user.model';
import {BadgeWire} from '@imagine-cms/types';
import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class BadgeModel implements BadgeWire {
  @Field({nullable: true})
  id?: number;

  @Field({nullable: true})
  code?: string;
}
