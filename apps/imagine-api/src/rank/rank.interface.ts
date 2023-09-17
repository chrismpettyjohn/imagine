import {Field, InputType, InterfaceType} from '@nestjs/graphql';
import {RankFlagsWire, RankScopesWire} from '@imagine-cms/types';

@InputType('RankScopesInput')
@InterfaceType()
export class RankScopesInterface implements RankScopesWire {
  @Field()
  accessAdminPanel!: boolean;

  @Field()
  manageArticles!: boolean;

  @Field()
  manageUsers!: boolean;

  @Field()
  manageRooms!: boolean;

  @Field()
  manageBetaCodes!: boolean;

  @Field()
  managePermissions!: boolean;

  @Field()
  manageSupportTickets!: boolean;

  @Field()
  manageStaffApplications!: boolean;

  @Field()
  manageRadioRequests!: boolean;
}

@InputType('RankFlagsInput')
@InterfaceType()
export class RankFlagsInterface implements RankFlagsWire {
  @Field()
  showOnStaffPage!: boolean;

  @Field()
  acceptingApplications!: boolean;
}
