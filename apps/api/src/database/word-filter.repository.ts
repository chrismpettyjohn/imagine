import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';
import {WordFilterEntity} from './word-filter.entity';

@Injectable()
export class WordFilterRepository extends BaseRepository<WordFilterEntity> {
  constructor(@InjectRepository(WordFilterEntity) wordFilterRepo: Repository<WordFilterEntity>) {
    super(wordFilterRepo);
  }
}
