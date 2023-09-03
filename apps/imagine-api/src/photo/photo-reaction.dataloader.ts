import {In} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {PhotoReactionModel} from './photo-reaction.model';
import {PhotoReactionService} from './photo-reaction.service';
import {BaseDataloaderService} from '../utility/base.dataloader';

@Injectable()
export class PhotoReactionDataloaderService extends BaseDataloaderService<PhotoReactionModel> {
  constructor(private readonly photoReactionService: PhotoReactionService) {
    super(async (ids: number[]) => {
      if (ids.length === 0) {
        return [];
      }

      return this.photoReactionService.findMany({
        id: In(ids),
      });
    });
  }
}
