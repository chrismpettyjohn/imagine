import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {ArticleEntity} from './article.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';

@Injectable()
export class ArticleRepository extends BaseRepository<ArticleEntity> {
  constructor(
    @InjectRepository(ArticleEntity) articleRepo: Repository<ArticleEntity>
  ) {
    super(articleRepo);
  }
}
