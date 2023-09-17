import {Field, ObjectType} from '@nestjs/graphql';
import {
  RadioRequestEntity,
  RadioRequestStatus,
} from '../database/radio-request.entity';

@ObjectType()
export class RadioRequestModel {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => Number, {nullable: true})
  userID!: number;

  @Field(() => String, {nullable: true})
  content!: string;

  @Field(() => RadioRequestStatus, {nullable: true})
  status!: RadioRequestStatus;

  @Field(() => Number, {nullable: true})
  reviewingUserID?: number;

  @Field(() => Number, {nullable: true})
  createdAt!: number;

  @Field(() => Number, {nullable: true})
  updatedAt!: number;

  @Field(() => Number, {nullable: true})
  reviewedAt?: number;

  static fromEntity(entity: RadioRequestEntity): RadioRequestModel {
    return {
      id: entity.id!,
      userID: entity.userID,
      content: entity.content,
      status: entity.status,
      reviewingUserID: entity.reviewingUserID,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      reviewedAt: entity.reviewedAt,
    };
  }
}
