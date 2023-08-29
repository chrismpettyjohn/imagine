import {Module} from '@nestjs/common';
import {GroupResolver} from './group.resolver';
import {SessionModule} from '../session/session.module';
import {GroupDataloaderService} from './group.dataloader';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [GroupDataloaderService, GroupResolver],
  exports: [GroupDataloaderService, GroupResolver],
})
export class GroupModule {}
