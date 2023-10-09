import {Field, ObjectType} from '@nestjs/graphql';
import {UserFurnitureEntity} from '../database/user-furniture.entity';

@ObjectType()
export class UserFurnitureModel {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => Number, {nullable: true})
  userID!: number;

  @Field(() => Number, {nullable: true})
  roomID!: number;

  @Field(() => Number, {nullable: true})
  itemID!: number;

  static fromEntity(entity: UserFurnitureEntity): UserFurnitureModel {
    return {
      id: entity.id!,
      userID: entity.userID,
      roomID: entity.roomID,
      itemID: entity.itemID,
    };
  }
}
