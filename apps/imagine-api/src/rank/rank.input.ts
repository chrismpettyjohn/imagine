import {Field, InputType} from '@nestjs/graphql';
import {
  RankCreateInputDTO,
  RankScopesWire,
  RankUpdateInputDTO,
} from '@imagine-cms/types';
import {
  MaxLength,
  IsAlphanumeric,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import {
  RankWireScopesCreateInput,
  RankWireScopesUpdateInput,
} from './rank-scopes.input';

@InputType()
export class RankCreateInput implements RankCreateInputDTO {
  @Field()
  @MaxLength(30)
  @IsNotEmpty()
  @IsAlphanumeric()
  name!: string;

  @Field()
  @IsNotEmpty()
  description!: string;

  @Field()
  @MaxLength(6)
  @IsNotEmpty()
  @IsAlphanumeric()
  badgeCode!: string;

  @Field()
  @IsBoolean()
  showStaff!: boolean;

  @Field()
  @IsObject()
  scopes!: RankWireScopesCreateInput;
}

@InputType()
export class RankUpdateInput implements RankUpdateInputDTO {
  @Field({nullable: true})
  @MaxLength(30)
  @IsNotEmpty()
  @IsAlphanumeric()
  @IsOptional()
  name?: string;

  @Field({nullable: true})
  @IsNotEmpty()
  @IsOptional()
  description?: string;

  @Field({nullable: true})
  @MaxLength(6)
  @IsNotEmpty()
  @IsAlphanumeric()
  @IsOptional()
  badgeCode?: string;

  @Field()
  @IsBoolean()
  @IsOptional()
  showStaff!: boolean;

  @Field({nullable: true})
  @IsObject()
  @IsOptional()
  scopes?: RankWireScopesUpdateInput;
}

@InputType()
export class RankFilterManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => Boolean, {nullable: true})
  showStaffOnly?: boolean;
}

@InputType()
export class RankFilterOneInput {
  @Field(() => Number)
  id!: number;
}
