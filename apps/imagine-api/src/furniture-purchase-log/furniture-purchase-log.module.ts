import {Module} from '@nestjs/common';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';
import {FurniturePurchaseLogResolver} from './furniture-purchase-log.resolver';
import {FurniturePurchaseLogOverviewResolver} from './furniture-purchase-log-overview.resolver';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [
    FurniturePurchaseLogResolver,
    FurniturePurchaseLogOverviewResolver,
  ],
})
export class FurniturePurchaseLogModule {}
