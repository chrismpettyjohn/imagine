import {Module} from '@nestjs/common';
import {ConfigResolver} from './config.resolver';
import {CommonModule} from '../common/common.module';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [CommonModule, DatabaseModule],
  providers: [ConfigResolver],
})
export class ConfigModule {}
