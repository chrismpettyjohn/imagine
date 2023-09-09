import {Module} from '@nestjs/common';
import {SessionModule} from '../session/session.module';
import {FriendshipResolver} from './friendship.resolver';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [FriendshipResolver],
})
export class FriendshipModule {}
