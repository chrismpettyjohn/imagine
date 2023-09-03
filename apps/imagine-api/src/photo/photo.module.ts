import {Module} from '@nestjs/common';
import {PhotoResolver} from './photo.resolver';
import {SessionModule} from '../session/session.module';
import {PhotoDataloaderService} from './photo.dataloader';
import {DatabaseModule} from '../database/database.module';
import {PhotoCommentService} from './photo-comment.service';
import {PhotoCommentResolver} from './photo-comment.resolver';
import {PhotoReactionService} from './photo-reaction.service';
import {PhotoReactionResolver} from './photo-reaction.resolver';
import {PhotoCommentDataloaderService} from './photo-comment.dataloader';
import {PhotoReactionDataloaderService} from './photo-reaction.dataloader';
import {registerEnumType} from '@nestjs/graphql';
import {ReactionType} from '../database/reaction.entity';

registerEnumType(ReactionType, {
  name: 'ReactionType',
});

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [
    PhotoResolver,
    PhotoCommentResolver,
    PhotoReactionResolver,
    PhotoDataloaderService,
    PhotoCommentService,
    PhotoReactionService,
    PhotoCommentDataloaderService,
    PhotoReactionDataloaderService,
  ],
  exports: [
    PhotoDataloaderService,
    PhotoResolver,
    PhotoCommentService,
    PhotoReactionService,
    PhotoCommentDataloaderService,
    PhotoReactionDataloaderService,
  ],
})
export class PhotoModule {}
