import {ArticleModel} from '../article.model';
import {UserModel} from '../../user/user.model';
import {Field, ID, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class ArticleCommentModel {
  @Field(() => ID)
  id!: string;

  @Field({nullable: true})
  articleID?: number;

  @Field(() => ArticleModel, {nullable: true})
  article?: ArticleModel;

  @Field({nullable: true})
  userID?: number;

  @Field(() => UserModel, {nullable: true})
  user?: UserModel;

  @Field({nullable: true})
  comment?: string;
}
