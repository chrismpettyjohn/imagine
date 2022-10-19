import {Module} from '@nestjs/common';
import {UserResolver} from './user.resolver';
import {CommonModule} from '../common/common.module';
import {SessionModule} from '../session/session.module';
import {UserDataloaderService} from './user.dataloader';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [CommonModule, DatabaseModule, SessionModule],
  providers: [UserResolver, UserDataloaderService],
  exports: [UserDataloaderService],
})
export class UserModule {}
