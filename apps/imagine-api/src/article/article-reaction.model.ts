import {Field, ObjectType} from '@nestjs/graphql';
import {ReactionModel} from '../reaction/reaction.model';

@ObjectType()
export class ArticleReactionModel extends ReactionModel {
  @Field(() => Number, {nullable: true})
  articleID?: number;
}
