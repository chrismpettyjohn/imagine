import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class ArticleCommentCreateInput {
  @Field(() => Number)
  articleID!: number;

  @Field(() => String)
  comment!: string;
}

@InputType()
export class ArticleCommentUpdateInput {
  @Field(() => String)
  comment!: string;
}

@InputType()
export class ArticleCommentFilterManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [Number], {nullable: true})
  articleIDs?: number[];

  @Field(() => [Number], {nullable: true})
  userIDs?: number[];
}

@InputType()
export class ArticleCommentFilterOneInput {
  @Field(() => Number)
  id!: number;
}
