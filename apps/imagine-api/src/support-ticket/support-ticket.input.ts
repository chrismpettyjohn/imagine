import {Max} from 'class-validator';
import {Field, InputType} from '@nestjs/graphql';
import {GLOBAL_MAX_RESOURCE_LIMIT} from '../imagine.constant';

@InputType()
export class SupportTicketFilterManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [Number], {nullable: true})
  reportingUserIDs?: number[];

  @Field(() => [Number], {nullable: true})
  offendingUserIDs?: number[];

  @Field(() => [Number], {nullable: true})
  staffUserIDs?: number[];

  @Field(() => Number, {nullable: true})
  @Max(GLOBAL_MAX_RESOURCE_LIMIT)
  limit?: number;
}

@InputType()
export class SupportTicketFilterOneInput {
  @Field(() => Number)
  id!: number;
}
