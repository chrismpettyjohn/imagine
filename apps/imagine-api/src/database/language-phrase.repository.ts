import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';
import {LanguagePhraseEntity} from './language-phrase.entity';

@Injectable()
export class LanguagePhraseRepository extends BaseRepository<LanguagePhraseEntity> {
  constructor(
    @InjectRepository(LanguagePhraseEntity)
    languagePhraseRepo: Repository<LanguagePhraseEntity>
  ) {
    super(languagePhraseRepo);
  }
}
