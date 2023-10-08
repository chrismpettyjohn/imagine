import {Field, ObjectType} from '@nestjs/graphql';
import {
  FurnitureEntity,
  FurnitureValueType,
} from '../database/furniture.entity';

@ObjectType()
export class FurnitureModel {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => FurnitureValueType, {nullable: true})
  valueType!: FurnitureValueType;

  @Field(() => String, {nullable: true})
  publicName!: string;

  @Field(() => String, {nullable: true})
  itemName!: string;

  @Field(() => Number, {nullable: true})
  createdAt!: number;

  static fromEntity(entity: FurnitureEntity): FurnitureModel {
    return {
      id: entity.id!,
      valueType: entity.valueType,
      publicName: entity.publicName,
      itemName: entity.itemName,
      createdAt: entity.createdAt!,
    };
  }
}
