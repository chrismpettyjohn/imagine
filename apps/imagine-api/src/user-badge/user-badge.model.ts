import {Field, ObjectType} from '@nestjs/graphql';
import {UserBadgeEntity} from '../database/user-badge.entity';

@ObjectType()
export class UserBadgeModel {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => Number, {nullable: true})
  userID!: number;

  @Field(() => Number, {nullable: true})
  slotID!: number;

  @Field(() => String, {nullable: true})
  badgeCode!: string;

  static fromEntity(userBadgeEntity: UserBadgeEntity): UserBadgeModel {
    return {
      id: userBadgeEntity.id!,
      userID: userBadgeEntity.userID,
      slotID: userBadgeEntity.slotID,
      badgeCode: userBadgeEntity.badgeCode,
    };
  }
}
