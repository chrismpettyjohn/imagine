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

@InputType()
export class RankWireScopesInput implements RankScopesWire {
  @Field()
  @IsBoolean()
  accessAdminPanel!: boolean;

  @Field()
  @IsBoolean()
  manageArticles!: boolean;
}

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
  @IsObject()
  scopes!: RankWireScopesInput;
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

  @Field({nullable: true})
  @IsObject()
  @IsOptional()
  scopes?: RankWireScopesInput;
}
