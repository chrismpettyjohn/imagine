import {Field, ObjectType} from '@nestjs/graphql';
import {PinnedFurnitureEntity} from '../database/pinned-furniture.entity';

@ObjectType()
export class UserPinnedFurnitureModel {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => Number, {nullable: true})
  userID!: number;

  @Field(() => Number, {nullable: true})
  furnitureID!: number;

  @Field(() => Number, {nullable: true})
  createdAt!: number;

  @Field(() => Number, {nullable: true})
  updatedAt!: number;

  static fromEntity(entity: PinnedFurnitureEntity): UserPinnedFurnitureModel {
    return {
      id: entity.id!,
      userID: entity.userID,
      furnitureID: entity.furnitureID,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
