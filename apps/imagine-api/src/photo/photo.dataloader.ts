import {In} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {PhotoEntity} from '../database/photo.entity';
import {PhotoRepository} from '../database/photo.repository';
import {BaseDataloaderService} from '../utility/base.dataloader';

@Injectable()
export class PhotoDataloaderService extends BaseDataloaderService<PhotoEntity> {
  constructor(private readonly photoRepo: PhotoRepository) {
    super(async (ids: number[]) => {
      if (ids.length === 0) {
        return [];
      }

      return this.photoRepo._find({
        id: In(ids),
      });
    });
  }
}
