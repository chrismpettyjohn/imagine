import {Module} from '@nestjs/common';
import {BadgeResolver} from './badge.resolver';
import {CommonModule} from '../common/common.module';
import {BadgeDataloaderService} from './badge.dataloader';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [CommonModule, DatabaseModule],
  providers: [BadgeResolver, BadgeDataloaderService],
  exports: [BadgeDataloaderService],
})
export class BadgeModule {}
