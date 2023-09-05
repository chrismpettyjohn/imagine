import {Module} from '@nestjs/common';
import {PhotoResolver} from './photo.resolver';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';
import {PhotoCommentService} from './photo-comment.service';
import {PhotoCommentResolver} from './photo-comment.resolver';
import {PhotoReactionService} from './photo-reaction.service';
import {PhotoReactionResolver} from './photo-reaction.resolver';
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
    PhotoCommentService,
    PhotoReactionService,
  ],
  exports: [PhotoResolver, PhotoCommentService, PhotoReactionService],
})
export class PhotoModule {}
