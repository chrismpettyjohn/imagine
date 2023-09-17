import {Module} from '@nestjs/common';
import {registerEnumType} from '@nestjs/graphql';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';
import {RadioRequestResolver} from './radio-request.resolver';
import {RadioRequestStatus} from '../database/radio-request.entity';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [RadioRequestResolver],
})
export class RadioRequestModule {}

registerEnumType(RadioRequestStatus, {
  name: 'RadioRequestStatus',
});
