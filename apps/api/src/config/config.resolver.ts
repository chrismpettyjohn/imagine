import {ConfigModel} from './config.model';
import {PubSub} from 'graphql-subscriptions';
import {ConfigUpdateInput} from './config.input';
import {ConfigEntity} from '../database/config.entity';
import {ConfigDataloaderService} from './config.dataloader';
import {ConfigRepository} from '../database/config.repository';
import {Args, Mutation, Query, Resolver, Subscription} from '@nestjs/graphql';

const pubSub = new PubSub();

@Resolver(() => ConfigModel)
export class ConfigResolver {
  constructor(
    private readonly configRepo: ConfigRepository,
    private readonly configDataLoaderService: ConfigDataloaderService
  ) {}

  @Query(() => ConfigModel)
  async config(): Promise<ConfigEntity> {
    return this.configDataLoaderService.loadById(1);
  }

  @Mutation(() => Boolean)
  async configUpdate(
    @Args('configUpdateInput') configUpdateInput: ConfigUpdateInput
  ) {
    await this.configRepo.update({id: 1}, configUpdateInput);
    pubSub.publish('configUpdated', {configUpdated: configUpdateInput});
    return true;
  }

  @Subscription(() => ConfigModel)
  configUpdated() {
    return pubSub.asyncIterator('configUpdated');
  }

  @Mutation(() => Boolean)
  async rankDelete(@Args('id') id: number) {
    const deletedRank = await this.configRepo.findOneOrFail({id});
    pubSub.publish('rankDeleted', {rankDeleted: deletedRank});
    await this.configRepo.delete({id});
    return true;
  }
}
