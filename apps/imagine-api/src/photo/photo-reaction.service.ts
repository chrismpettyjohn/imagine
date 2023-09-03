import {Injectable} from '@nestjs/common';
import {PHOTO_RESOURCE_TYPE} from './photo.const';
import {ReactionService} from '../reaction/reaction.service';
import {ReactionRepository} from '../database/reaction.repository';

@Injectable()
export class PhotoReactionService extends ReactionService {
  constructor(reactionRepo: ReactionRepository) {
    super(PHOTO_RESOURCE_TYPE, reactionRepo);
  }
}
