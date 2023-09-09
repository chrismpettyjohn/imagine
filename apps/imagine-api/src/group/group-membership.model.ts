import {Field, ObjectType} from '@nestjs/graphql';
import {GroupMembershipEntity} from '../database/group-membership.entity';

@ObjectType()
export class GroupMembershipModel {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => Number, {nullable: true})
  groupID!: number;

  @Field(() => Number, {nullable: true})
  userID!: number;

  @Field(() => Number, {nullable: true})
  createdAt!: number;

  static fromEntity(
    groupMembershipEntity: GroupMembershipEntity
  ): GroupMembershipModel {
    return {
      id: groupMembershipEntity.id!,
      groupID: groupMembershipEntity.groupID,
      userID: groupMembershipEntity.userID,
      createdAt: groupMembershipEntity.createdAt,
    };
  }
}
