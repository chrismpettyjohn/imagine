import {Module} from '@nestjs/common';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';
import {StorePackageResolver} from './store-package.resolver';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [StorePackageResolver],
})
export class StorePackageModule {}
