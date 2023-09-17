import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';
import {RoomEnterLogEntity} from './room-enter-log.entity';

@Injectable()
export class RoomEnterLogRepository extends BaseRepository<RoomEnterLogEntity> {
  constructor(
    @InjectRepository(RoomEnterLogEntity)
    roomEnterLogRepo: Repository<RoomEnterLogEntity>
  ) {
    super(roomEnterLogRepo);
  }
}
