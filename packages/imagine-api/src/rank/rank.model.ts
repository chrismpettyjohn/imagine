import {UserModel} from '../user/user.model';
import {Field, ID, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class RankModel {
  @Field(() => ID)
  id!: string;

  @Field({nullable: true})
  name?: string;

  @Field({nullable: true})
  description?: string;

  @Field({nullable: true})
  badgeCode?: string;

  @Field(() => [UserModel], {nullable: true})
  users?: UserModel[];
}
