import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class UserBadgeFilterManyInput {
  @Field(() => [Number], {nullable: true})
  userIDS?: number[];

  @Field(() => Number, {nullable: true})
  limit?: number;
}
