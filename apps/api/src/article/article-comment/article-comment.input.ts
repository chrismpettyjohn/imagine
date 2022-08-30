import {Field, InputType} from '@nestjs/graphql';
import {MaxLength, IsNumber, IsNotEmpty} from 'class-validator';

@InputType()
export class ArticleCommentCreateInput {
  @Field()
  @IsNumber()
  articleID!: number;

  @Field()
  @MaxLength(255)
  @IsNotEmpty()
  comment!: string;
}

@InputType()
export class ArticleCommentUpdateInput {
  @Field()
  @MaxLength(255)
  @IsNotEmpty()
  comment!: string;
}
