import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {SessionEntity} from './session.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';

@Injectable()
export class SessionRepository extends BaseRepository<SessionEntity> {
  constructor(
    @InjectRepository(SessionEntity) sessionRepo: Repository<SessionEntity>
  ) {
    super(sessionRepo);
  }
}
