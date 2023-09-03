import {Field, InterfaceType} from '@nestjs/graphql';

@InterfaceType()
export abstract class CommentModel {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => Number, {nullable: true})
  userID?: number;

  @Field(() => String, {nullable: true})
  comment?: string;

  @Field(() => Number, {nullable: true})
  createdAt?: number;

  @Field(() => Number, {nullable: true})
  updatedAt?: number;
}
