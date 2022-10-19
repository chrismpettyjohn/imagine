import {Repository} from 'typeorm';
import {RoomEntity} from './room.entity';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';

@Injectable()
export class RoomRepository extends BaseRepository<RoomEntity> {
  constructor(
    @InjectRepository(RoomEntity)
    roomRepo: Repository<RoomEntity>
  ) {
    super(roomRepo);
  }
}
