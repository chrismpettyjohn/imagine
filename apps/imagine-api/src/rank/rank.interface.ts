import {Field, InputType, InterfaceType} from '@nestjs/graphql';
import {RankFlagsWire, RankScopesWire} from '@imagine-cms/types';

@InputType('RankScopesInput')
@InterfaceType()
export class RankScopesInterface implements RankScopesWire {
  @Field({nullable: true})
  accessAdminPanel!: boolean;

  @Field({nullable: true})
  manageArticles!: boolean;

  @Field({nullable: true})
  manageUsers!: boolean;

  @Field({nullable: true})
  manageRooms!: boolean;

  @Field({nullable: true})
  manageBetaCodes!: boolean;

  @Field({nullable: true})
  managePermissions!: boolean;

  @Field({nullable: true})
  manageSupportTickets!: boolean;

  @Field({nullable: true})
  manageStaffApplications!: boolean;

  @Field({nullable: true})
  manageRadioRequests!: boolean;

  @Field({nullable: true})
  manageBugReports!: boolean;

  @Field({nullable: true})
  manageBans!: boolean;

  @Field({nullable: true})
  manageChatlogs!: boolean;

  @Field({nullable: true})
  manageGroups!: boolean;

  @Field({nullable: true})
  manageLanguages!: boolean;

  @Field({nullable: true})
  manageRanks!: boolean;

  @Field({nullable: true})
  manageSite!: boolean;

  @Field({nullable: true})
  manageWordFilter!: boolean;

  @Field({nullable: true})
  manageStore!: boolean;
}

@InputType('RankFlagsInput')
@InterfaceType()
export class RankFlagsInterface implements RankFlagsWire {
  @Field({nullable: true})
  showOnStaffPage!: boolean;

  @Field({nullable: true})
  acceptingApplications!: boolean;
}
