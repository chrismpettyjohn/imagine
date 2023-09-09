import {RoomWire} from '@imagine-cms/types';
import {Field, ObjectType} from '@nestjs/graphql';
import {RoomEntity} from '../database/room.entity';

@ObjectType()
export class RoomModel implements RoomWire {
  @Field({nullable: true})
  id?: number;

  @Field({nullable: true})
  name?: string;

  @Field({nullable: true})
  description?: string;

  @Field({nullable: true})
  userID?: number;

  @Field({nullable: true})
  usersNow?: number;

  @Field({nullable: true})
  usersMax?: number;

  static fromEntity(roomEntity: RoomEntity): RoomModel {
    return {
      id: roomEntity.id!,
      name: roomEntity.name,
      description: roomEntity.description,
      userID: roomEntity.userID,
      usersNow: roomEntity.usersNow,
      usersMax: roomEntity.usersMax,
    };
  }
}
