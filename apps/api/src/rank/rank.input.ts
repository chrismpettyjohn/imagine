import {Field, InputType} from '@nestjs/graphql';
import {RankCreateInputDTO, RankUpdateInputDTO} from '@imagine-cms/types';
import {MaxLength, IsAlphanumeric, IsNotEmpty, IsOptional} from 'class-validator';

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
}

@InputType()
export class RankUpdateInput implements RankUpdateInputDTO {
  @Field()
  @MaxLength(30)
  @IsNotEmpty()
  @IsAlphanumeric()
  @IsOptional()
  name?: string;

  @Field()
  @IsNotEmpty()
  @IsOptional()
  description?: string;

  @Field()
  @MaxLength(6)
  @IsNotEmpty()
  @IsAlphanumeric()
  @IsOptional()
  badgeCode?: string;
}
