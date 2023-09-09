import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UserBadgeEntity} from './user-badge.entity';
import {BaseRepository} from '../utility/base.repository';

@Injectable()
export class UserBadgeRepository extends BaseRepository<UserBadgeEntity> {
  constructor(
    @InjectRepository(UserBadgeEntity)
    userBadgeRepo: Repository<UserBadgeEntity>
  ) {
    super(userBadgeRepo);
  }
}
