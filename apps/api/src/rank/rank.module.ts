import {RankEntity} from './rank.entity';
import {RankResolver} from './rank.resolver';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserModule} from '../user/user.module';
import {RankRepository} from './rank.repository';
import {forwardRef, Module} from '@nestjs/common';
import {CommonModule} from '../common/common.module';
import {RankDataloaderService} from './rank.dataloader';

@Module({
  imports: [TypeOrmModule.forFeature([RankEntity]), CommonModule, forwardRef(() => UserModule)],
  providers: [RankRepository, RankResolver, RankDataloaderService],
  exports: [TypeOrmModule, RankRepository, RankDataloaderService],
})
export class RankModule {}
