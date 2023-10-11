import {Max} from 'class-validator';
import {Field, InputType} from '@nestjs/graphql';
import {GLOBAL_MAX_RESOURCE_LIMIT} from '../imagine.constant';
import {StorePackageBenefits} from '../database/store-package.entity';

@InputType()
export class StorePackageFilterOneInput {
  @Field(() => Number)
  id!: number;
}

@InputType()
export class StorePackageFilterManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => Number, {nullable: true})
  skip?: number;

  @Field(() => Number, {nullable: true})
  @Max(GLOBAL_MAX_RESOURCE_LIMIT)
  limit?: number;
}

@InputType()
export class StorePackageBenefitsInput implements StorePackageBenefits {
  @Field(() => Number)
  credits!: number;

  @Field(() => Number)
  pixels!: number;

  @Field(() => Number)
  points!: number;

  @Field(() => Number)
  rankID!: number;

  @Field(() => [Number])
  itemIDs!: number[];

  @Field(() => [String], {nullable: true})
  badgeCodes!: string[];
}

@InputType()
export class StorePackageCreateInput {
  @Field(() => String)
  title!: string;

  @Field(() => String)
  description!: string;

  @Field(() => String)
  content!: string;

  @Field(() => String)
  imageURL!: string;

  @Field(() => Boolean)
  isRecurring!: boolean;

  @Field(() => String)
  totalCost!: string;

  @Field(() => String)
  currency!: string;

  @Field(() => StorePackageBenefitsInput)
  benefits!: StorePackageBenefitsInput;
}
