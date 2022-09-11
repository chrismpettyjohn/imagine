import {UserModel} from '../user/user.model';
import {RankWireScopesInput} from './rank.input';
import {Field, ObjectType} from '@nestjs/graphql';
import {RankScopesWire, RankWire} from '@imagine-cms/types';

@ObjectType()
export class RankScopesModel implements RankScopesWire {
  @Field({nullable: false})
  accessAdminPanel!: boolean;

  @Field({nullable: false})
  manageArticles!: boolean;
}

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

  @Field(() => RankScopesModel, {nullable: true})
  scopes?: RankScopesModel;

  @Field(() => [UserModel], {nullable: true})
  users?: UserModel[];
}
