import {Repository} from 'typeorm';
import {RankEntity} from './rank.entity';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';

@Injectable()
export class RankRepository extends BaseRepository<RankEntity> {
  constructor(
    @InjectRepository(RankEntity) profileRepo: Repository<RankEntity>
  ) {
    super(profileRepo);
  }
}
