import {Module} from '@nestjs/common';
import {ArticleResolver} from './article.resolver';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';
import {ArticleDataloaderService} from './article.dataloader';
import {ArticleCommentResolver} from './article-comment/article-comment.resolver';
import {ArticleCommentDataloaderService} from './article-comment/article-comment.dataloader';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [
    ArticleDataloaderService,
    ArticleResolver,
    ArticleCommentDataloaderService,
    ArticleCommentResolver,
  ],
  exports: [
    ArticleDataloaderService,
    ArticleResolver,
    ArticleCommentDataloaderService,
    ArticleCommentResolver,
  ],
})
export class ArticleModule {}
