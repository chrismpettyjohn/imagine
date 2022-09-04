import {omit} from 'lodash';
import {BanArgs} from './ban.args';
import {BanModel} from './ban.model';
import {PubSub} from 'graphql-subscriptions';
import {Inject, forwardRef} from '@nestjs/common';
import {UserEntity} from '../database/user.entity';
import {GetUser} from '../session/get-user.decorator';
import {BanEntity} from '../database/ban.entity';
import {UserRepository} from '../database/user.repository';
import {HasSession} from '../session/has-session.decorator';
import {BanDataloaderService} from './ban.dataloader';
import {BanRepository} from '../database/ban.repository';
import {BanCreateInput, BanUpdateInput} from './ban.input';
import {Args, Mutation, Query, Resolver, Subscription} from '@nestjs/graphql';

const pubSub = new PubSub();

@Resolver(() => BanModel)
export class BanResolver {
  constructor(
    @Inject(forwardRef(() => UserRepository))
    private readonly userRepo: UserRepository,
    private readonly banRepo: BanRepository,
    private readonly banDataloaderService: BanDataloaderService
  ) {}

  @Query(() => BanModel)
  async ban(@Args('id') id: number): Promise<BanEntity> {
    return this.banDataloaderService.loadById(id);
  }

  @Query(() => [BanModel])
  bans(@Args() banArgs: BanArgs): Promise<BanEntity[]> {
    return this.banRepo.find(omit(banArgs, 'other'), banArgs.other);
  }

  @Mutation(() => BanModel)
  @HasSession()
  async banCreate(
    @Args('newBan') banCreateInput: BanCreateInput,
    @GetUser() user: UserEntity
  ): Promise<BanEntity> {
    const newBan = await this.banRepo.create({
      ...banCreateInput,
      type: 'site',
      addedByUserID: user.id!,
    });
    pubSub.publish('banCreated', {banCreated: newBan});
    return newBan;
  }

  @Subscription(() => BanModel)
  banCreated() {
    return pubSub.asyncIterator('banCreated');
  }

  @Mutation(() => Boolean)
  async banUpdate(
    @Args('id') id: number,
    @Args('banChanges') banChanges: BanUpdateInput
  ) {
    await this.banRepo.update({id}, banChanges);
    return true;
  }

  @Mutation(() => Boolean)
  async banDelete(@Args('id') id: number) {
    const deletedBan = await this.banRepo.findOneOrFail({id});
    pubSub.publish('banDeleted', {banDeleted: deletedBan});
    await this.banRepo.delete({id});
    return true;
  }

  @Subscription(() => BanModel)
  banDeleted() {
    return pubSub.asyncIterator('banDeleted');
  }
}
