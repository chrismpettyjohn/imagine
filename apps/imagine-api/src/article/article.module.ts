import {Module} from '@nestjs/common';
import {ArticleResolver} from './article.resolver';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';
import {ArticleDataloaderService} from './article.dataloader';
import {ArticleCommentResolver} from './article-comment.resolver';
import {ArticleReactionResolver} from './article-reaction.resolver';
import {ArticleCommentDataloaderService} from './article-comment.dataloader';
import {ArticleReactionDataloaderService} from './article-reaction.dataloader';
import {ArticleCommentService} from './article-comment.service';
import {ArticleReactionService} from './article-reaction.service';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [
    ArticleResolver,
    ArticleCommentService,
    ArticleReactionService,
    ArticleCommentResolver,
    ArticleReactionResolver,
    ArticleDataloaderService,
    ArticleCommentDataloaderService,
    ArticleReactionDataloaderService,
  ],
  exports: [
    ArticleCommentService,
    ArticleReactionService,
    ArticleDataloaderService,
    ArticleCommentDataloaderService,
    ArticleReactionDataloaderService,
  ],
})
export class ArticleModule {}
