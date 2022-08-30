import {Field, InputType} from '@nestjs/graphql';
import {MaxLength, IsNumber, IsNotEmpty} from 'class-validator';
import {ArticleCommentCreateInputDTO, ArticleCommentUpdateInputDTO} from '@imagine-cms/types';

@InputType()
export class ArticleCommentCreateInput implements ArticleCommentCreateInputDTO {
  @Field()
  @IsNumber()
  articleID!: number;

  @Field()
  @MaxLength(255)
  @IsNotEmpty()
  comment!: string;
}

@InputType()
export class ArticleCommentUpdateInput implements ArticleCommentUpdateInputDTO {
  @Field()
  @MaxLength(255)
  @IsNotEmpty()
  comment!: string;
}
