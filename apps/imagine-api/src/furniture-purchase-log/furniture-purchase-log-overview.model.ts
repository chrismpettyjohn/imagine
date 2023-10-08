import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class FurniturePurchaseLogOverviewModel {
  @Field(() => Number, {nullable: true})
  furnitureID!: number;

  @Field(() => Number, {nullable: true})
  averageCostCredits?: number;

  @Field(() => Number, {nullable: true})
  averageCostPoints?: number;

  @Field(() => Number, {nullable: true})
  totalSells?: number;
}
