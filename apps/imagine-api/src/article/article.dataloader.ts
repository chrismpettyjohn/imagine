import { In } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ArticleEntity } from '../database/article.entity';
import { ArticleRepository } from '../database/article.repository';
import { BaseDataloaderService } from '../utility/base.dataloader';

@Injectable()
export class ArticleDataloaderService extends BaseDataloaderService<ArticleEntity> {
  constructor(private readonly articleRepo: ArticleRepository) {
    super(async (ids: number[]) => {
      if (ids.length === 0) {
        return [];
      }

      return this.articleRepo._find({
        id: In(ids),
      });
    });
  }
}
