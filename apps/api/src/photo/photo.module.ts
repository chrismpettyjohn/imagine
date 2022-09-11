import {Module} from '@nestjs/common';
import {PhotoResolver} from './photo.resolver';
import {SessionModule} from '../session/session.module';
import {PhotoDataloaderService} from './photo.dataloader';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [PhotoDataloaderService, PhotoResolver],
  exports: [PhotoDataloaderService, PhotoResolver],
})
export class PhotoModule {}
