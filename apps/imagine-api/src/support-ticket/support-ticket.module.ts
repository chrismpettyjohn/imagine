import {Module} from '@nestjs/common';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';
import {SupportTicketResolver} from './support-ticket.resolver';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [SupportTicketResolver],
})
export class SupportTicketModule {}
