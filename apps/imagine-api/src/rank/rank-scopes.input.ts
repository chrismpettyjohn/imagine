import {Field, InputType} from '@nestjs/graphql';
import {RankScopesWire} from '@imagine-cms/types';
import {IsOptional, IsBoolean} from 'class-validator';

@InputType()
export class RankWireScopesCreateInput implements RankScopesWire {
  @Field()
  @IsBoolean()
  accessAdminPanel!: boolean;

  @Field()
  @IsBoolean()
  manageArticles!: boolean;

  @Field()
  @IsBoolean()
  manageUsers!: boolean;

  @Field()
  @IsBoolean()
  manageRooms!: boolean;

  @Field({nullable: true})
  manageBetaCodes!: boolean;

  @Field()
  @IsBoolean()
  managePermissions!: boolean;

  @Field()
  @IsBoolean()
  manageSupportTickets!: boolean;

  @Field()
  @IsBoolean()
  manageStaffApplications!: boolean;

  @Field()
  @IsBoolean()
  manageSite!: boolean;

  @Field()
  @IsBoolean()
  manageRadioRequests!: boolean;

  @Field()
  @IsBoolean()
  manageBugReports!: boolean;

  @Field()
  @IsBoolean()
  manageBans!: boolean;

  @Field()
  @IsBoolean()
  manageChatlogs!: boolean;

  @Field()
  @IsBoolean()
  manageGroups!: boolean;

  @Field()
  @IsBoolean()
  manageLanguages!: boolean;

  @Field()
  @IsBoolean()
  manageRanks!: boolean;

  @Field()
  @IsBoolean()
  manageWordFilter!: boolean;

  @Field()
  @IsBoolean()
  manageStore!: boolean;
}

@InputType()
export class RankWireScopesUpdateInput implements Partial<RankScopesWire> {
  @Field({nullable: true})
  @IsBoolean()
  @IsOptional()
  accessAdminPanel?: boolean;

  @Field({nullable: true})
  @IsBoolean()
  @IsOptional()
  manageArticles?: boolean;

  @Field({nullable: true})
  @IsBoolean()
  @IsOptional()
  manageUsers?: boolean;

  @Field({nullable: true})
  @IsBoolean()
  @IsOptional()
  manageRooms?: boolean;

  @Field({nullable: true})
  manageBetaCodes!: boolean;

  @Field({nullable: true})
  @IsBoolean()
  @IsOptional()
  managePermissions?: boolean;

  @Field({nullable: true})
  @IsBoolean()
  @IsOptional()
  manageSupportTickets?: boolean;

  @Field({nullable: true})
  @IsBoolean()
  @IsOptional()
  manageStaffApplications?: boolean;

  @Field()
  @IsBoolean()
  @IsOptional()
  manageStore?: boolean;

  @Field()
  @IsBoolean()
  @IsOptional()
  manageSite?: boolean;

  @Field()
  @IsBoolean()
  @IsOptional()
  manageRadioRequests?: boolean;

  @Field()
  @IsBoolean()
  @IsOptional()
  manageBugReports?: boolean;

  @Field()
  @IsBoolean()
  @IsOptional()
  manageBans!: boolean;

  @Field()
  @IsBoolean()
  @IsOptional()
  manageChatlogs?: boolean;

  @Field()
  @IsBoolean()
  @IsOptional()
  manageGroups?: boolean;

  @Field()
  @IsBoolean()
  @IsOptional()
  manageLanguages?: boolean;

  @Field()
  @IsBoolean()
  @IsOptional()
  manageRanks?: boolean;

  @Field()
  @IsBoolean()
  @IsOptional()
  manageWordFilter?: boolean;
}
