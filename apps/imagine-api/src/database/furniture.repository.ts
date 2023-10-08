import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {FurnitureEntity} from './furniture.entity';
import {BaseRepository} from '../utility/base.repository';

@Injectable()
export class FurnitureRepository extends BaseRepository<FurnitureEntity> {
  constructor(
    @InjectRepository(FurnitureEntity)
    furnitureRepo: Repository<FurnitureEntity>
  ) {
    super(furnitureRepo);
  }
}
