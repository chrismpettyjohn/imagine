import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';
import {ArticleCommentEntity} from './article-comment.entity';

@Injectable()
export class ArticleCommentRepository extends BaseRepository<ArticleCommentEntity> {
  constructor(
    @InjectRepository(ArticleCommentEntity)
    articleCommentRepo: Repository<ArticleCommentEntity>
  ) {
    super(articleCommentRepo);
  }
}
