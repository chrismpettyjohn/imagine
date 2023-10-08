import {Field, ObjectType} from '@nestjs/graphql';
import {FurniturePurchaseLogEntity} from '../database/furniture-purchase-log.entity';

@ObjectType()
export class FurniturePurchaseLogModel {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => Number, {nullable: true})
  furnitureID!: number;

  @Field(() => Number, {nullable: true})
  userID!: number;

  @Field(() => [Number], {nullable: true})
  itemIDs!: number[];

  @Field(() => Number, {nullable: true})
  costCredits!: number;

  @Field(() => Number, {nullable: true})
  costPoints!: number;

  @Field(() => Number, {nullable: true})
  quantity!: number;

  @Field(() => Number, {nullable: true})
  createdAt!: number;

  static fromEntity(
    entity: FurniturePurchaseLogEntity
  ): FurniturePurchaseLogModel {
    return {
      id: entity.id!,
      furnitureID: entity.furnitureID,
      userID: entity.userID,
      itemIDs: entity.itemIDs.split(';').map(Number),
      costCredits: entity.costCredits,
      costPoints: entity.costPoints,
      quantity: entity.quantity,
      createdAt: entity.createdAt,
    };
  }
}
