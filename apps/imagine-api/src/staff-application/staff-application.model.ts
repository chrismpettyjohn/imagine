import {Field, ObjectType} from '@nestjs/graphql';
import {StaffApplicationEntity} from '../database/staff-application.entity';

@ObjectType()
export class StaffApplicationModel {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => Number, {nullable: true})
  userID!: number;

  @Field(() => Number, {nullable: true})
  rankID!: number;

  @Field(() => Boolean, {nullable: true})
  accepted!: number;

  @Field(() => Number, {nullable: true})
  reviewingUserID?: number;

  @Field(() => String, {nullable: true})
  content!: string;

  @Field(() => Number, {nullable: true})
  createdAt!: number;

  @Field(() => Number, {nullable: true})
  updatedAt!: number;

  @Field(() => Number, {nullable: true})
  reviewedAt?: number;

  static fromEntity(entity: StaffApplicationEntity): StaffApplicationModel {
    return {
      id: entity.id!,
      userID: entity.userID,
      rankID: entity.rankID,
      accepted: entity.applicationAccepted,
      reviewingUserID: entity.reviewingUserID,
      reviewedAt: entity.reviewedAt,
      content: entity.content,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
