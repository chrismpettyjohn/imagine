import {Field, InputType} from '@nestjs/graphql';
import {MaxLength, IsAlphanumeric, IsNotEmpty, IsOptional} from 'class-validator';

@InputType()
export class ArticleCreateInput {
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
  @IsNotEmpty()
  image!: string;
}

@InputType()
export class ArticleUpdateInput {
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
  @IsNotEmpty()
  @IsOptional()
  image?: string;
}
