import {Field, ObjectType} from '@nestjs/graphql';
import {RankScopesWire} from '@imagine-cms/types';

@ObjectType()
export class RankScopesModel implements RankScopesWire {
  @Field({nullable: false})
  accessAdminPanel!: boolean;

  @Field({nullable: false})
  manageArticles!: boolean;

  @Field({nullable: false})
  manageUsers!: boolean;
}
