import {JwtModule} from '@nestjs/jwt';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserModule} from '../user/user.module';
import {SessionEntity} from './session.entity';
import {SessionService} from './session.service';
import {forwardRef, Module} from '@nestjs/common';
import {SessionResolver} from './session.resolver';
import {CommonModule} from '../common/common.module';
import {SessionRepository} from './session.repository';
import {SessionDataloaderService} from './session.dataloader';
import {JwtAuthenticationGuard} from './jwt-authentication.guard';
import {IMAGINE_JWT_EXPIRATION_IN_MS, IMAGINE_JWT_SECRET} from '../imagine.constant';

@Module({
  imports: [
    TypeOrmModule.forFeature([SessionEntity]),
    JwtModule.register({
      secret: IMAGINE_JWT_SECRET,
      signOptions: {
        expiresIn: IMAGINE_JWT_EXPIRATION_IN_MS,
      },
    }),
    CommonModule,
    forwardRef(() => UserModule),
  ],
  providers: [SessionService, SessionDataloaderService, SessionRepository, SessionResolver, JwtAuthenticationGuard],
  exports: [
    TypeOrmModule,
    SessionService,
    SessionDataloaderService,
    SessionRepository,
    SessionResolver,
    JwtAuthenticationGuard,
    JwtModule,
  ],
})
export class SessionModule {}
