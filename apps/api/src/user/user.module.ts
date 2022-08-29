import {UserEntity} from './user.entity';
import {UserResolver} from './user.resolver';
import {TypeOrmModule} from '@nestjs/typeorm';
import {RankModule} from '../rank/rank.module';
import {UserRepository} from './user.repository';
import {forwardRef, Module} from '@nestjs/common';
import {CommonModule} from '../common/common.module';
import {SessionModule} from '../session/session.module';
import {UserDataloaderService} from './user.dataloader';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    CommonModule,
    forwardRef(() => SessionModule),
    forwardRef(() => RankModule),
  ],
  providers: [UserRepository, UserResolver, UserDataloaderService],
  exports: [TypeOrmModule, UserRepository, UserDataloaderService],
})
export class UserModule {}
