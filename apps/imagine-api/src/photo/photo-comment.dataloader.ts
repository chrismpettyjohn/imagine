import {In} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {PhotoCommentModel} from './photo-comment.model';
import {PhotoCommentService} from './photo-comment.service';
import {BaseDataloaderService} from '../utility/base.dataloader';

@Injectable()
export class PhotoCommentDataloaderService extends BaseDataloaderService<PhotoCommentModel> {
  constructor(private readonly photoCommentService: PhotoCommentService) {
    super(async (ids: number[]) => {
      if (ids.length === 0) {
        return [];
      }

      return this.photoCommentService.findMany({
        id: In(ids),
      });
    });
  }
}
