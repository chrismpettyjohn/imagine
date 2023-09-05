import {Module} from '@nestjs/common';
import {GroupResolver} from './group.resolver';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [GroupResolver],
  exports: [GroupResolver],
})
export class GroupModule {}
