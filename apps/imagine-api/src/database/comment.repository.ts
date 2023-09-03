import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';
import {CommentEntity} from './comment.entity';

@Injectable()
export class CommentRepository extends BaseRepository<CommentEntity> {
  constructor(
    @InjectRepository(CommentEntity) commentRepo: Repository<CommentEntity>
  ) {
    super(commentRepo);
  }
}
