import {Module} from '@nestjs/common';
import {ConfigResolver} from './config.resolver';
import {CommonModule} from '../common/common.module';
import {ConfigDataloaderService} from './config.dataloader';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [CommonModule, DatabaseModule],
  providers: [ConfigResolver, ConfigDataloaderService],
  exports: [ConfigDataloaderService],
})
export class ConfigModule {}
