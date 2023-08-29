import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {LanguageEntity} from './language.entity';
import {BaseRepository} from '../utility/base.repository';

@Injectable()
export class LanguageRepository extends BaseRepository<LanguageEntity> {
  constructor(
    @InjectRepository(LanguageEntity) languageRepo: Repository<LanguageEntity>
  ) {
    super(languageRepo);
  }
}
