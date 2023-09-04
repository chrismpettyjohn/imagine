import {UserModel} from '../user/user.model';
import {ArticleWire} from '@imagine-cms/types';
import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class ArticleModel implements ArticleWire {
  @Field({nullable: true})
  id?: number;

  @Field({nullable: true})
  name?: string;

  @Field({nullable: true})
  description?: string;

  @Field({nullable: true})
  content?: string;

  @Field({nullable: true})
  imageURL?: string;

  @Field({nullable: true})
  userID?: number;

  @Field(() => UserModel, {nullable: true})
  user?: UserModel;
}
