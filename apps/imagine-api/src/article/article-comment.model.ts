import {Field, ObjectType} from '@nestjs/graphql';
import {CommentModel} from '../comment/comment.model';

@ObjectType()
export class ArticleCommentModel extends CommentModel {
  @Field(() => Number, {nullable: true})
  articleID?: number;
}
