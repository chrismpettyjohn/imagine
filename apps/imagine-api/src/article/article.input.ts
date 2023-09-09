import {Field, InputType} from '@nestjs/graphql';
import {ArticleCreateInputDTO, ArticleUpdateInputDTO} from '@imagine-cms/types';
import {
  MaxLength,
  IsAlphanumeric,
  IsNotEmpty,
  IsOptional,
  IsUrl,
} from 'class-validator';

@InputType()
export class ArticleCreateInput implements ArticleCreateInputDTO {
  @Field()
  @MaxLength(30)
  @IsNotEmpty()
  @IsAlphanumeric()
  name!: string;

  @Field()
  @IsNotEmpty()
  description!: string;

  @Field()
  @IsNotEmpty()
  content!: string;

  @Field()
  @IsUrl()
  imageURL!: string;
}

@InputType()
export class ArticleUpdateInput implements ArticleUpdateInputDTO {
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
  @IsNotEmpty()
  @IsOptional()
  content?: string;

  @Field()
  @IsUrl()
  @IsOptional()
  imageURL?: string;
}

@InputType()
export class ArticleFilterManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [Number], {nullable: true})
  userIDs?: number[];

  @Field(() => Number, {nullable: true})
  limit?: number;
}

@InputType()
export class ArticleFilterOneInput {
  @Field(() => Number)
  id!: number;
}
