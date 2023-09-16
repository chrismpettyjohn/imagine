import {Module} from '@nestjs/common';
import {EmailModule} from '../email/email.module';
import {CommonModule} from '../common/common.module';
import {DatabaseModule} from '../database/database.module';
import {ForgotPasswordService} from './forgot-password.service';
import {ForgotPasswordRequestResolver} from './forgot-password.resolver';

@Module({
  imports: [CommonModule, DatabaseModule, EmailModule],
  providers: [ForgotPasswordService, ForgotPasswordRequestResolver],
})
export class ForgotPasswordModule {}
