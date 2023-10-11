import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [],
})
export class StorePackageModule {}
