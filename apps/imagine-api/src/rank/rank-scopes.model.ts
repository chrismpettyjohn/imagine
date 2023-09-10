import {Field, ObjectType} from '@nestjs/graphql';
import {RankScopesWire} from '@imagine-cms/types';

@ObjectType()
export class RankScopesModel implements RankScopesWire {
  @Field({nullable: true})
  accessAdminPanel!: boolean;

  @Field({nullable: true})
  manageArticles!: boolean;

  @Field({nullable: true})
  manageUsers!: boolean;

  @Field({nullable: true})
  manageSupportTickets!: boolean;
}
