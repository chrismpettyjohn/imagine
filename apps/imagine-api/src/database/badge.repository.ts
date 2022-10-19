import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {BadgeEntity} from './badge.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';

@Injectable()
export class BadgeRepository extends BaseRepository<BadgeEntity> {
  constructor(
    @InjectRepository(BadgeEntity) badgeRepo: Repository<BadgeEntity>
  ) {
    super(badgeRepo);
  }
}
