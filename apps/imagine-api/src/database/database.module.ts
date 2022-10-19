import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CommonModule} from '../common/common.module';
import {databaseEntities, databaseRepositories} from './database.const';

@Module({
  imports: [CommonModule, TypeOrmModule.forFeature([...databaseEntities])],
  providers: [...databaseRepositories],
  exports: [...databaseRepositories, TypeOrmModule],
})
export class DatabaseModule {}
