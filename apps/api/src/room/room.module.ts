import {Module} from '@nestjs/common';
import {RoomResolver} from './room.resolver';
import {SessionModule} from '../session/session.module';
import {RoomDataloaderService} from './room.dataloader';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [RoomDataloaderService, RoomResolver],
  exports: [RoomDataloaderService, RoomResolver],
})
export class RoomModule {}
