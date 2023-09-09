import {Module} from '@nestjs/common';
import {GroupResolver} from './group.resolver';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';
import {GroupMembershipResolver} from './group-membership.resolver';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [GroupResolver, GroupMembershipResolver],
})
export class GroupModule {}
