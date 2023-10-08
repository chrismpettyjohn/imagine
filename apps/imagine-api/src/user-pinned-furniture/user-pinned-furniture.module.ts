import {Module} from '@nestjs/common';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';
import {UserPinnedFurnitureResolver} from './user-pinned-furniture.resolver';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [UserPinnedFurnitureResolver],
})
export class UserPinnedFurnitureModule {}
