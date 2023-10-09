import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database/database.module';
import {SessionModule} from '../session/session.module';

@Module({
  imports: [DatabaseModule, SessionModule],
})
export class FurnitureReactionModule {}
