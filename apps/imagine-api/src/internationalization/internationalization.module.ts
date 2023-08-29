import {Module, Provider} from '@nestjs/common';
import {LanguageResolver} from './language.resolver';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';
import {LanguageDataloaderService} from './language.dataloader';
import {LanguagePhraseResolver} from './language-phrase.resolver';
import {LanguagePhraseDataloaderService} from './language-phrase.dataloader';
import {LanguagePhraseTranslationDataloaderService} from './language-phrase-translation.dataloader';

const INTERNATIONALIZATION_PROVIDERS: Provider[] = [
  LanguageResolver,
  LanguagePhraseResolver,
  LanguageDataloaderService,
  LanguagePhraseDataloaderService,
  LanguagePhraseTranslationDataloaderService,
];

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [...INTERNATIONALIZATION_PROVIDERS],
  exports: [...INTERNATIONALIZATION_PROVIDERS],
})
export class InternationalizationModule {}
