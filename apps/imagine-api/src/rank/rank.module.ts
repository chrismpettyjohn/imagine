import {Module} from '@nestjs/common';
import {RankResolver} from './rank.resolver';
import {CommonModule} from '../common/common.module';
import {RankDataloaderService} from './rank.dataloader';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [CommonModule, DatabaseModule],
  providers: [RankResolver, RankDataloaderService],
  exports: [RankDataloaderService],
})
export class RankModule {}
