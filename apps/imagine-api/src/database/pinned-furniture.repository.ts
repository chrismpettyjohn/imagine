import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';
import {PinnedFurnitureEntity} from './pinned-furniture.entity';

@Injectable()
export class PinnedFurnitureRepository extends BaseRepository<PinnedFurnitureEntity> {
  constructor(
    @InjectRepository(PinnedFurnitureEntity)
    pinnedFurnitureRepo: Repository<PinnedFurnitureEntity>
  ) {
    super(pinnedFurnitureRepo);
  }
}
