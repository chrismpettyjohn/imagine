import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';
import {LanguagePhraseTranslationEntity} from './language-phrase-translation.entity';

@Injectable()
export class LanguagePhraseTranslationRepository extends BaseRepository<LanguagePhraseTranslationEntity> {
  constructor(
    @InjectRepository(LanguagePhraseTranslationEntity)
    languagePhraseTranslationRepo: Repository<LanguagePhraseTranslationEntity>
  ) {
    super(languagePhraseTranslationRepo);
  }
}
