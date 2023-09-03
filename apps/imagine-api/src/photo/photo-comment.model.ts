import {Field, ObjectType} from '@nestjs/graphql';
import {CommentModel} from '../comment/comment.model';

@ObjectType()
export class PhotoCommentModel extends CommentModel {
  @Field(() => Number, {nullable: true})
  photoID?: number;
}
