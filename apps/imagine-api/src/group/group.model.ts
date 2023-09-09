import {GroupWire} from '@imagine-cms/types';
import {Field, ObjectType} from '@nestjs/graphql';
import {GroupEntity} from '../database/group.entity';

@ObjectType()
export class GroupModel implements GroupWire {
  @Field({nullable: true})
  id?: number;

  @Field({nullable: true})
  name?: string;

  @Field({nullable: true})
  description?: string;

  @Field({nullable: true})
  badge?: string;

  @Field({nullable: true})
  userID?: number;

  static fromEntity(groupEntity: GroupEntity): GroupModel {
    return {
      id: groupEntity.id!,
      name: groupEntity.name,
      description: groupEntity.description,
      badge: groupEntity.badge,
      userID: groupEntity.userID,
    };
  }
}
