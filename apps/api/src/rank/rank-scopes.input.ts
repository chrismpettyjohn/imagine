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
}
