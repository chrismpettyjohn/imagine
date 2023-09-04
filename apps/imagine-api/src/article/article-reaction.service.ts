import {Injectable} from '@nestjs/common';
import {ARTICLE_RESOURCE_TYPE} from './article.const';
import {ReactionService} from '../reaction/reaction.service';
import {ReactionRepository} from '../database/reaction.repository';

@Injectable()
export class ArticleReactionService extends ReactionService {
  constructor(reactionRepo: ReactionRepository) {
    super(ARTICLE_RESOURCE_TYPE, reactionRepo);
  }
}
