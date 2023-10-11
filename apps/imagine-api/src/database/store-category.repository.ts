import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';
import {StoreCategoryEntity} from './store-category.entity';

@Injectable()
export class StoreCategoryRepository extends BaseRepository<StoreCategoryEntity> {
  constructor(
    @InjectRepository(StoreCategoryEntity)
    storeCategoryRepo: Repository<StoreCategoryEntity>
  ) {
    super(storeCategoryRepo);
  }
}
