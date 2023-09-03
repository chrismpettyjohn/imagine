import { In } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { BaseDataloaderService } from '../../utility/base.dataloader';
import { ArticleCommentEntity } from '../../database/article-comment.entity';
import { ArticleCommentRepository } from '../../database/article-comment.repository';

@Injectable()
export class ArticleCommentDataloaderService extends BaseDataloaderService<ArticleCommentEntity> {
  constructor(private readonly articleCommentRepo: ArticleCommentRepository) {
    super(async (ids: number[]) => {
      if (ids.length === 0) {
        return [];
      }

      return this.articleCommentRepo._find({
        id: In(ids),
      });
    });
  }
}
