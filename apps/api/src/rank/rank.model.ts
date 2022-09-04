import {UserModel} from '../user/user.model';
import {RankWire} from '@imagine-cms/types';
import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class RankModel implements RankWire {
  @Field({nullable: true})
  id?: number;

  @Field({nullable: true})
  name?: string;

  @Field({nullable: true})
  description?: string;

  @Field({nullable: true})
  badgeCode?: string;

  @Field(() => [UserModel], {nullable: true})
  users?: UserModel[];
}
