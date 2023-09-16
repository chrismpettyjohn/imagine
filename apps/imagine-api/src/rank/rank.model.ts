import {RankWire} from '@imagine-cms/types';
import {Field, ObjectType} from '@nestjs/graphql';
import {RankScopesModel} from './rank-scopes.model';
import {RankEntity, RankSiteShowStaff} from '../database/rank.entity';

@ObjectType()
export class RankModel implements RankWire {
  @Field({nullable: true})
  id?: number;

  @Field({nullable: true})
  name?: string;

  @Field({nullable: true})
  badgeCode?: string;

  @Field(() => Boolean, {nullable: true})
  siteShowStaff?: boolean;

  @Field(() => RankScopesModel, {nullable: true})
  scopes?: RankScopesModel;

  static fromEntity(entity: RankEntity): RankModel {
    return {
      id: entity.id!,
      name: entity.name,
      badgeCode: entity.badgeCode,
      siteShowStaff: entity.siteShowStaff === RankSiteShowStaff.Yes,
      scopes: entity.scopes,
    };
  }
}
