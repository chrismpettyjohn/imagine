import {Field, ObjectType} from '@nestjs/graphql';
import {UserTradeLogEntity} from '../database/user-trade-log.entity';

@ObjectType()
export class UserTradeLogModel {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => Number, {nullable: true})
  userOneID!: number;

  @Field(() => String, {nullable: true})
  userOneIPAddress!: string;

  @Field(() => Number, {nullable: true})
  userOneItemCount!: number;

  @Field(() => Number, {nullable: true})
  userTwoID!: number;

  @Field(() => String, {nullable: true})
  userTwoIPAddress!: string;

  @Field(() => Number, {nullable: true})
  userTwoItemCount!: number;

  @Field(() => Number, {nullable: true})
  timestamp!: number;

  static fromEntity(entity: UserTradeLogEntity): UserTradeLogModel {
    return {
      id: entity.id!,
      userOneID: entity.userOneID,
      userOneIPAddress: entity.userOneIPAddress,
      userOneItemCount: entity.userOneItemCount,
      userTwoID: entity.userTwoID,
      userTwoIPAddress: entity.userTwoIPAddress,
      userTwoItemCount: entity.userTwoItemCount,
      timestamp: entity.timestamp,
    };
  }
}
