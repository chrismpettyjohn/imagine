import {UserModel} from '../user/user.model';
import {Field, ID, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class ArticleModel {
  @Field(() => ID)
  id!: string;

  @Field({nullable: true})
  name?: string;

  @Field({nullable: true})
  description?: string;

  @Field({nullable: true})
  content?: string;

  @Field({nullable: true})
  image?: string;

  @Field({nullable: true})
  userID?: number;

  @Field(() => UserModel, {nullable: true})
  user?: UserModel;
}
