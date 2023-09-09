import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database/database.module';
import {UserBadgeResolver} from './user-badge.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [UserBadgeResolver],
})
export class UserBadgeModule {}
