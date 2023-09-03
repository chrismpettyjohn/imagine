import {RankWire} from '@imagine-cms/types';
import {UserModel} from '../user/user.model';
import {Field, ObjectType} from '@nestjs/graphql';
import {RankScopesModel} from './rank-scopes.model';

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

  @Field(() => Boolean, {nullable: true})
  showStaff?: boolean;

  @Field(() => RankScopesModel, {nullable: true})
  scopes?: RankScopesModel;

  @Field(() => [UserModel], {nullable: true})
  users?: UserModel[];
}
