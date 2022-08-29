import {SessionArgs} from './session.args';
import {PubSub} from 'graphql-subscriptions';
import {SessionModel} from './session.model';
import {SessionEntity} from './session.entity';
import {SessionService} from './session.service';
import {GetSession} from './get-session.decorator';
import {HasSession} from './has-session.decorator';
import {SessionRepository} from './session.repository';
import {SessionDataloaderService} from './session.dataloader';
import {Args, Mutation, Query, Resolver, Subscription} from '@nestjs/graphql';

const pubSub = new PubSub();

@Resolver(() => SessionModel)
export class SessionResolver {
  constructor(
    private readonly sessionRepo: SessionRepository,
    private readonly sessionService: SessionService,
    private readonly sessionDataLoaderService: SessionDataloaderService
  ) {}

  @HasSession()
  @Query(() => SessionModel)
  async sessionCurrent(@GetSession() sessionID: number): Promise<SessionEntity> {
    return this.sessionDataLoaderService.loadById(sessionID);
  }

  @Query(() => SessionModel)
  async session(@Args('id') id: number): Promise<SessionEntity> {
    return this.sessionDataLoaderService.loadById(id);
  }

  @Query(() => [SessionModel])
  sessions(@Args() sessionArgs: SessionArgs): Promise<SessionEntity[]> {
    return this.sessionRepo.find(sessionArgs);
  }

  @Mutation(() => String)
  async sessionCreate(@Args('username') username: string, @Args('password') password: string): Promise<string> {
    const newSession = await this.sessionService.loginWithUsernameAndPassword(username, password);
    pubSub.publish('sessionCreated', {sessionCreated: newSession});
    return newSession;
  }

  @Subscription(() => SessionModel)
  sessionCreated() {
    return pubSub.asyncIterator('sessionCreated');
  }
}
