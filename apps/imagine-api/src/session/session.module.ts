import {Module} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {HasScopeGuard} from './has-scope.guard';
import {SessionService} from './session.service';
import {SessionResolver} from './session.resolver';
import {CommonModule} from '../common/common.module';
import {DatabaseModule} from '../database/database.module';
import {SessionDataloaderService} from './session.dataloader';
import {JwtAuthenticationGuard} from './jwt-authentication.guard';
import {
  IMAGINE_JWT_EXPIRATION_IN_MS,
  IMAGINE_JWT_SECRET,
} from '../imagine.constant';

@Module({
  imports: [
    JwtModule.register({
      secret: IMAGINE_JWT_SECRET,
      signOptions: {
        expiresIn: IMAGINE_JWT_EXPIRATION_IN_MS,
      },
    }),
    CommonModule,
    DatabaseModule,
  ],
  providers: [
    SessionService,
    SessionDataloaderService,
    SessionResolver,
    JwtAuthenticationGuard,
    HasScopeGuard,
  ],
  exports: [
    SessionService,
    SessionDataloaderService,
    SessionResolver,
    JwtAuthenticationGuard,
    HasScopeGuard,
    JwtModule,
  ],
})
export class SessionModule {}
