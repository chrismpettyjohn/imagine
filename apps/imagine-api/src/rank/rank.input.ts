import {Field, InputType} from '@nestjs/graphql';
import {RankCreateInputDTO, RankUpdateInputDTO} from '@imagine-cms/types';
import {
  MaxLength,
  IsAlphanumeric,
  IsNotEmpty,
  IsObject,
  IsOptional,
  Max,
} from 'class-validator';
import {GLOBAL_MAX_RESOURCE_LIMIT} from '../imagine.constant';
import {RankFlagsInterface, RankScopesInterface} from './rank.interface';

@InputType()
export class RankCreateInput implements RankCreateInputDTO {
  @Field()
  @MaxLength(30)
  @IsNotEmpty()
  @IsAlphanumeric()
  name!: string;

  @Field()
  @MaxLength(6)
  @IsNotEmpty()
  @IsAlphanumeric()
  badgeCode!: string;

  @Field()
  backgroundColor!: string;

  @Field(() => RankScopesInterface)
  @IsObject()
  scopes!: RankScopesInterface;

  @Field(() => RankFlagsInterface)
  @IsObject()
  flags!: RankFlagsInterface;
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
  @MaxLength(6)
  @IsNotEmpty()
  @IsAlphanumeric()
  @IsOptional()
  badgeCode?: string;

  @Field(() => String)
  @IsOptional()
  backgroundColor?: string;

  @Field(() => RankScopesInterface, {nullable: true})
  @IsObject()
  @IsOptional()
  scopes?: RankScopesInterface;

  @Field(() => RankFlagsInterface, {nullable: true})
  @IsObject()
  @IsOptional()
  flags?: RankFlagsInterface;
}

@InputType()
export class RankFilterManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => Boolean, {nullable: true})
  staffOnly?: boolean;

  @Field(() => Number, {nullable: true})
  @Max(GLOBAL_MAX_RESOURCE_LIMIT)
  limit?: number;
}

@InputType()
export class RankFilterOneInput {
  @Field(() => Number)
  id!: number;
}
