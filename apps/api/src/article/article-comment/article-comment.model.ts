import {ArticleModel} from '../article.model';
import {UserModel} from '../../user/user.model';
import {Field, ObjectType} from '@nestjs/graphql';
import {ArticleCommentWire} from '@imagine-cms/types';

@ObjectType()
export class ArticleCommentModel implements ArticleCommentWire {
  @Field({nullable: true})
  id?: number;

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

  @Field({nullable: true})
  createdAt?: string;

  @Field({nullable: true})
  updatedAt?: string;
}
