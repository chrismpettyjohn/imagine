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
  manageSupportTickets!: boolean;

  @Field({nullable: true})
  @IsBoolean()
  @IsOptional()
  manageStaffApplications!: boolean;
}
