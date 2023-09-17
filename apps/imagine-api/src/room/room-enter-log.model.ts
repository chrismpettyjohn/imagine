import {Field, ObjectType} from '@nestjs/graphql';
import {RoomEnterLogEntity} from '../database/room-enter-log.entity';

@ObjectType()
export class RoomEnterLogModel {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => Number, {nullable: true})
  roomID!: number;

  @Field(() => Number, {nullable: true})
  userID!: number;

  @Field(() => Number, {nullable: true})
  enterTimestamp!: number;

  @Field(() => Number, {nullable: true})
  exitTimestamp!: number;

  static fromEntity(entity: RoomEnterLogEntity): RoomEnterLogModel {
    return {
      id: entity.id!,
      roomID: entity.roomID,
      userID: entity.userID,
      enterTimestamp: entity.enterTimestamp,
      exitTimestamp: entity.exitTimestamp,
    };
  }
}
