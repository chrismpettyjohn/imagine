import {Max} from 'class-validator';
import {Field, InputType} from '@nestjs/graphql';
import {GLOBAL_MAX_RESOURCE_LIMIT} from '../imagine.constant';

@InputType()
export class FurniturePurchaseLogOverviewFilterOneInput {
  @Field(() => Number)
  furnitureID!: number;
}

@InputType()
export class FurniturePurchaseLogOverviewFilterManyInput {
  @Field(() => Number, {nullable: true})
  skip?: number;

  @Field(() => Number, {nullable: true})
  @Max(GLOBAL_MAX_RESOURCE_LIMIT)
  limit?: number;
}
