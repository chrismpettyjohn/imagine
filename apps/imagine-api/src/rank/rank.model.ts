import {RankWire} from '@imagine-cms/types';
import {Field, ObjectType} from '@nestjs/graphql';
import {RankFlagsModel, RankScopesModel} from './rank-scopes.model';
import {RankEntity, RankSiteShowStaff} from '../database/rank.entity';

@ObjectType()
export class RankModel implements RankWire {
  @Field({nullable: true})
  id!: number;

  @Field({nullable: true})
  name!: string;

  @Field({nullable: true})
  badgeCode!: string;

  @Field(() => Boolean, {nullable: true})
  siteShowStaff!: boolean;

  @Field(() => RankScopesModel, {nullable: true})
  scopes!: RankScopesModel;

  @Field(() => RankFlagsModel, {nullable: true})
  flags!: RankFlagsModel;

  static fromEntity(entity: RankEntity): RankModel {
    return {
      id: entity.id!,
      name: entity.name,
      badgeCode: entity.badgeCode,
      siteShowStaff: entity.siteShowStaff === RankSiteShowStaff.Yes,
      scopes: {
        accessAdminPanel: entity.scopes?.accessAdminPanel ?? false,
        manageArticles: entity.scopes?.manageArticles ?? false,
        manageUsers: entity.scopes?.manageUsers ?? false,
        manageRooms: entity.scopes?.manageRooms ?? false,
        manageBetaCodes: entity.scopes?.manageBetaCodes ?? false,
        managePermissions: entity.scopes?.managePermissions ?? false,
        manageSupportTickets: entity.scopes?.manageSupportTickets ?? false,
        manageStaffApplications:
          entity.scopes?.manageStaffApplications ?? false,
        manageRadioRequests: entity.scopes?.manageRadioRequests ?? false,
      },
      flags: {
        showOnStaffPage: entity.flags?.showOnStaffPage ?? false,
        acceptingApplications: entity.flags?.acceptingApplications ?? false,
      },
    };
  }
}
