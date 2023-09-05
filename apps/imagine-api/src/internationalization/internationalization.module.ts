import {Module, Provider} from '@nestjs/common';
import {LanguageResolver} from './language.resolver';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';
import {LanguagePhraseResolver} from './language-phrase.resolver';

const INTERNATIONALIZATION_PROVIDERS: Provider[] = [
  LanguageResolver,
  LanguagePhraseResolver,
];

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [...INTERNATIONALIZATION_PROVIDERS],
  exports: [...INTERNATIONALIZATION_PROVIDERS],
})
export class InternationalizationModule {}
