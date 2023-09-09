import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class GroupFilterManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [Number], {nullable: true})
  userIDs?: number[];

  @Field(() => Number, {nullable: true})
  limit?: number;
}

@InputType()
export class GroupFilterOneInput {
  @Field(() => Number)
  id!: number;
}
