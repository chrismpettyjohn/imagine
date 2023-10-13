import {Max} from 'class-validator';
import {Field, InputType} from '@nestjs/graphql';
import {GLOBAL_MAX_RESOURCE_LIMIT} from '../imagine.constant';

@InputType()
export class BugReportFilterOneInput {
  @Field(() => Number)
  id!: number;
}

@InputType()
export class BugReportFilterManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => Boolean, {nullable: true})
  isOpen?: boolean;

  @Field(() => [Number], {nullable: true})
  severity?: number[];

  @Field(() => [String], {nullable: true})
  urls?: string[];

  @Field(() => [Number], {nullable: true})
  reportingUserIDs?: number[];

  @Field(() => [Number], {nullable: true})
  resolvingUserIDs?: number[];

  @Field(() => Number, {nullable: true})
  skip?: number;

  @Field(() => Number, {nullable: true})
  @Max(GLOBAL_MAX_RESOURCE_LIMIT)
  limit?: number;
}

@InputType()
export class BugReportCreateInput {
  @Field(() => String)
  title!: string;

  @Field(() => String)
  content!: string;

  @Field(() => String)
  url!: string;
}
@InputType()
export class BugReportUpdateInput {
  @Field(() => String, {nullable: true})
  title?: string;

  @Field(() => String, {nullable: true})
  content?: string;

  @Field(() => String, {nullable: true})
  url?: string;

  @Field(() => Number, {nullable: true})
  severity?: number;
}
