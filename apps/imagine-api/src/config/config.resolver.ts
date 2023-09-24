import {ConfigModel} from './config.model';
import {PubSub} from 'graphql-subscriptions';
import {ConfigUpdateInput} from './config.input';
import {ConfigDataloaderService} from './config.dataloader';
import {ConfigRepository} from '../database/config.repository';
import {Args, Mutation, Query, Resolver, Subscription} from '@nestjs/graphql';

const pubSub = new PubSub();

@Resolver(() => ConfigModel)
export class ConfigResolver {
  constructor(
    private readonly configRepo: ConfigRepository,
    private readonly configDataLoader: ConfigDataloaderService
  ) {}

  @Query(() => ConfigModel)
  async config(): Promise<ConfigModel> {
    return this.configDataLoader.loadById(1);
  }

  @Mutation(() => Boolean)
  async configUpdate(
    @Args('configUpdateInput') configUpdateInput: ConfigUpdateInput
  ) {
    await this.configRepo.update(
      {id: 1},
      ConfigUpdateInput.toEntity(configUpdateInput)
    );
    this.configDataLoader.clearByID(1);
    pubSub.publish('configUpdated', {configUpdated: configUpdateInput});
    return true;
  }

  @Subscription(() => ConfigModel)
  configUpdated() {
    return pubSub.asyncIterator('configUpdated');
  }
}
