import {Module} from '@nestjs/common';
import {UserOrderBy} from './user.input';
import {UserResolver} from './user.resolver';
import {CommonModule} from '../common/common.module';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';
import {registerEnumType} from '@nestjs/graphql';

@Module({
  imports: [CommonModule, DatabaseModule, SessionModule],
  providers: [UserResolver],
})
export class UserModule {}

registerEnumType(UserOrderBy, {
  name: 'UserOrderBy',
});
