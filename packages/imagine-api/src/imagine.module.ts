import {Module} from '@nestjs/common';
import {UserModule} from './user/user.module';
import {RankModule} from './rank/rank.module';
import {SessionModule} from './session/session.module';

@Module({
  imports: [SessionModule, UserModule, RankModule],
})
export class ImagineModule {}
