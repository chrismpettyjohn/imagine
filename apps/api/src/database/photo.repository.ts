import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {PhotoEntity} from './photo.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';

@Injectable()
export class PhotoRepository extends BaseRepository<PhotoEntity> {
  constructor(
    @InjectRepository(PhotoEntity) photoRepo: Repository<PhotoEntity>
  ) {
    super(photoRepo);
  }
}
