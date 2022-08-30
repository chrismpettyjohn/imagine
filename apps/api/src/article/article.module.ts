import {Module} from '@nestjs/common';
import {ArticleResolver} from './article.resolver';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';
import {ArticleDataloaderService} from './article.dataloader';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [ArticleDataloaderService, ArticleResolver],
  exports: [ArticleDataloaderService, ArticleResolver],
})
export class ArticleModule {}
