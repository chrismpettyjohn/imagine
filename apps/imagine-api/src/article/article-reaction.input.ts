import {Field, InputType} from '@nestjs/graphql';
import {ReactionType} from '../database/reaction.entity';

@InputType()
export class ArticleReactionCreateInput {
  @Field(() => Number)
  articleID!: number;

  @Field(() => ReactionType)
  reaction!: ReactionType;
}

@InputType()
export class ArticleReactionUpdateInput {
  @Field(() => ReactionType)
  reaction!: ReactionType;
}

@InputType()
export class ArticleReactionFilterManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [Number], {nullable: true})
  articleIDs?: number[];

  @Field(() => [Number], {nullable: true})
  userIDs?: number[];
}

@InputType()
export class ArticleReactionFilterOneInput {
  @Field(() => Number)
  id!: number;
}
