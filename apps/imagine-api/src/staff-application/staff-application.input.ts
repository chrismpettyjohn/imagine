import {Max} from 'class-validator';
import {Field, InputType} from '@nestjs/graphql';
import {GLOBAL_MAX_RESOURCE_LIMIT} from '../imagine.constant';

@InputType()
export class StaffApplicationCreateInput {
  @Field(() => Number)
  rankID!: number;

  @Field(() => String)
  content!: string;
}

@InputType()
export class StaffApplicationUpdateInput {
  @Field(() => String)
  content!: string;
}

@InputType()
export class StaffApplicationReviewInput {
  @Field(() => Boolean)
  accepted!: Boolean;
}

@InputType()
export class StaffApplicationFilterOneInput {
  @Field(() => Number)
  id!: number;
}

@InputType()
export class StaffApplicationFilterManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [Number], {nullable: true})
  rankIDs?: number[];

  @Field(() => [Number], {nullable: true})
  userIDs?: number[];

  @Field(() => Number, {nullable: true})
  @Max(GLOBAL_MAX_RESOURCE_LIMIT)
  limit?: number;
}
