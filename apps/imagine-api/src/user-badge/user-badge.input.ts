import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class UserBadgeFilterManyInput {
  @Field(() => [Number], {nullable: true})
  userIDs?: number[];

  @Field(() => Number, {nullable: true})
  limit?: number;
}
