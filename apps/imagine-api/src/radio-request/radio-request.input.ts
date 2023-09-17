import {Field, InputType} from '@nestjs/graphql';
import {RadioRequestStatus} from '../database/radio-request.entity';

@InputType()
export class RadioRequestFilterOneInput {
  @Field(() => Number)
  id!: number;
}

@InputType()
export class RadioRequestFilterManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [Number], {nullable: true})
  userIDs?: number[];

  @Field(() => [Number], {nullable: true})
  reviewingUserIDs?: number[];

  @Field(() => [RadioRequestStatus], {nullable: true})
  statuses?: RadioRequestStatus[];

  @Field(() => Number, {nullable: true})
  limit?: number;
}

@InputType()
export class RadioRequestCreateInput {
  @Field(() => String)
  content!: string;
}

@InputType()
export class RadioRequestUpdateInput {
  @Field(() => String)
  content!: string;
}

@InputType()
export class RadioRequestReviewInput {
  @Field(() => RadioRequestStatus)
  status!: RadioRequestStatus;
}
