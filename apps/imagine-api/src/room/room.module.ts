import {Module} from '@nestjs/common';
import {RoomResolver} from './room.resolver';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [RoomResolver],
  exports: [RoomResolver],
})
export class RoomModule {}
