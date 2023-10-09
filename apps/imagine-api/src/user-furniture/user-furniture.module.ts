import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database/database.module';
import {UserFurnitureResolver} from './user-furniture.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [UserFurnitureResolver],
})
export class UserFurnitureModule {}
