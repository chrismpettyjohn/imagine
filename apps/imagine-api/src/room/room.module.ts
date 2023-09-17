import {Module} from '@nestjs/common';
import {RoomResolver} from './room.resolver';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';
import {RoomEnterLogResolver} from './room-enter-log.resolver';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [RoomResolver, RoomEnterLogResolver],
  exports: [],
})
export class RoomModule {}
