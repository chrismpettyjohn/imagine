import {omit} from 'lodash';
import {JwtService} from '@nestjs/jwt';
import {SessionArgs} from './session.args';
import {PubSub} from 'graphql-subscriptions';
import {SessionService} from './session.service';
import {SessionCreateInput} from './session.input';
import {SessionEntity} from '../database/session.entity';
import {SessionDataloaderService} from './session.dataloader';
import {SessionRepository} from '../database/session.repository';
import {SessionCreatedModel, SessionModel} from './session.model';
import {Args, Mutation, Query, Resolver, Subscription} from '@nestjs/graphql';

const pubSub = new PubSub();

@Resolver(() => SessionModel)
export class SessionResolver {
  constructor(
    private readonly jwtService: JwtService,
    private readonly sessionRepo: SessionRepository,
    private readonly sessionService: SessionService,
    private readonly sessionDataLoaderService: SessionDataloaderService
  ) {}

  @Query(() => SessionModel)
  async sessionByJWT(@Args('jwt') jwt: string): Promise<SessionEntity> {
    const parsedJWT: {sessionID: number} = this.jwtService.decode(jwt) as any;
    return this.sessionRepo.findOneOrFail({id: parsedJWT.sessionID});
  }

  @Query(() => SessionModel)
  async session(@Args('id') id: number): Promise<SessionEntity> {
    return this.sessionDataLoaderService.loadById(id);
  }

  @Query(() => [SessionModel])
  sessions(@Args() sessionArgs: SessionArgs): Promise<SessionEntity[]> {
    return this.sessionRepo.find(omit(sessionArgs, 'other'), sessionArgs.other);
  }

  @Mutation(() => SessionCreatedModel)
  async sessionCreate(
    @Args('sessionCreateInput') sessionCreateInput: SessionCreateInput
  ): Promise<SessionCreatedModel> {
    const newSession = await this.sessionService.loginWithUsernameAndPassword(
      sessionCreateInput.username,
      sessionCreateInput.password
    );
    pubSub.publish('sessionCreated', {sessionCreated: newSession});
    return newSession;
  }

  @Subscription(() => SessionModel)
  sessionCreated() {
    return pubSub.asyncIterator('sessionCreated');
  }
}
