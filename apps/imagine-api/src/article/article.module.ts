import {Module} from '@nestjs/common';
import {ArticleResolver} from './article.resolver';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';
import {ArticleCommentResolver} from './article-comment.resolver';
import {ArticleReactionResolver} from './article-reaction.resolver';
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
  ],
  exports: [ArticleCommentService, ArticleReactionService],
})
export class ArticleModule {}
