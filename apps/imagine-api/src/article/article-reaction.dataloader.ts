import {In} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {ArticleReactionModel} from './article-reaction.model';
import {ArticleReactionService} from './article-reaction.service';
import {BaseDataloaderService} from '../utility/base.dataloader';

@Injectable()
export class ArticleReactionDataloaderService extends BaseDataloaderService<ArticleReactionModel> {
  constructor(private readonly articleReactionService: ArticleReactionService) {
    super(async (ids: number[]) => {
      if (ids.length === 0) {
        return [];
      }

      return this.articleReactionService.findMany({
        id: In(ids),
      });
    });
  }
}
