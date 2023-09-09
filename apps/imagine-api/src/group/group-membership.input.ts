import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class GroupMembershipFilterManyInput {
  @Field(() => [Number], {nullable: true})
  groupIDS?: number[];

  @Field(() => [Number], {nullable: true})
  userIDs?: number[];

  @Field(() => Number, {nullable: true})
  limit?: number;
}
