import {Injectable} from '@nestjs/common';
import {ARTICLE_RESOURCE_TYPE} from './article.const';
import {CommentService} from '../comment/comment.service';
import {CommentRepository} from '../database/comment.repository';

@Injectable()
export class ArticleCommentService extends CommentService {
  constructor(CommentRepo: CommentRepository) {
    super(ARTICLE_RESOURCE_TYPE, CommentRepo);
  }
}
