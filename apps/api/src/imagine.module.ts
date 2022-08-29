import {Module} from '@nestjs/common';
import {UserModule} from './user/user.module';
import {RankModule} from './rank/rank.module';
import {CommonModule} from './common/common.module';
import {SessionModule} from './session/session.module';
import {DatabaseModule} from './database/database.module';

@Module({
  imports: [CommonModule, DatabaseModule, SessionModule, UserModule, RankModule],
})
export class ImagineModule {}
