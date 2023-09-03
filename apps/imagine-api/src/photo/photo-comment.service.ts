import {Injectable} from '@nestjs/common';
import {PHOTO_RESOURCE_TYPE} from './photo.const';
import {CommentService} from '../comment/comment.service';
import {CommentRepository} from '../database/comment.repository';

@Injectable()
export class PhotoCommentService extends CommentService {
  constructor(CommentRepo: CommentRepository) {
    super(PHOTO_RESOURCE_TYPE, CommentRepo);
  }
}
