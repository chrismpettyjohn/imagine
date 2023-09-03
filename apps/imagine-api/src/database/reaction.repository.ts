import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {ReactionEntity} from './reaction.entity';
import {BaseRepository} from '../utility/base.repository';

@Injectable()
export class ReactionRepository extends BaseRepository<ReactionEntity> {
  constructor(
    @InjectRepository(ReactionEntity) ReactionRepo: Repository<ReactionEntity>
  ) {
    super(ReactionRepo);
  }
}
