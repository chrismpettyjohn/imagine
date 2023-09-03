import {In} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {RoomEntity} from '../database/room.entity';
import {RoomRepository} from '../database/room.repository';
import {BaseDataloaderService} from '../utility/base.dataloader';

@Injectable()
export class RoomDataloaderService extends BaseDataloaderService<RoomEntity> {
  constructor(private readonly roomRepo: RoomRepository) {
    super(async (ids: number[]) => {
      if (ids.length === 0) {
        return [];
      }

      return this.roomRepo._find({
        id: In(ids),
      });
    });
  }
}
