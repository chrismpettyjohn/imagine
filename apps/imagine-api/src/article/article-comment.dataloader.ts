import {In} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {ArticleCommentModel} from './article-comment.model';
import {ArticleCommentService} from './article-comment.service';
import {BaseDataloaderService} from '../utility/base.dataloader';

@Injectable()
export class ArticleCommentDataloaderService extends BaseDataloaderService<ArticleCommentModel> {
  constructor(private readonly articleCommentService: ArticleCommentService) {
    super(async (ids: number[]) => {
      if (ids.length === 0) {
        return [];
      }

      return this.articleCommentService.findMany({
        id: In(ids),
      });
    });
  }
}
