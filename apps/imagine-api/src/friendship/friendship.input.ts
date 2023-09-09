import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class FriendshipFilterManyInput {
  @Field(() => Number!)
  userID!: number;

  @Field(() => Number, {nullable: true})
  limit?: number;
}
