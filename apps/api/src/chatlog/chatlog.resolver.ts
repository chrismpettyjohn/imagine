import {omit} from 'lodash';
import {ChatlogArgs} from './chatlog.args';
import {ChatlogModel} from './chatlog.model';
import {PubSub} from 'graphql-subscriptions';
import {Inject, forwardRef} from '@nestjs/common';
import {ChatlogEntity} from '../database/chatlog.entity';
import {UserRepository} from '../database/user.repository';
import {ChatlogDataloaderService} from './chatlog.dataloader';
import {ChatlogRepository} from '../database/chatlog.repository';
import {Args, Mutation, Query, Resolver, Subscription} from '@nestjs/graphql';

const pubSub = new PubSub();

@Resolver(() => ChatlogModel)
export class ChatlogResolver {
  constructor(
    @Inject(forwardRef(() => UserRepository))
    private readonly userRepo: UserRepository,
    private readonly chatlogRepo: ChatlogRepository,
    private readonly chatlogDataloaderService: ChatlogDataloaderService
  ) {}

  @Query(() => ChatlogModel)
  async chatlog(@Args('id') id: number): Promise<ChatlogEntity> {
    return this.chatlogDataloaderService.loadById(id);
  }

  @Query(() => [ChatlogModel])
  chatlogs(@Args() chatlogArgs: ChatlogArgs): Promise<ChatlogEntity[]> {
    return this.chatlogRepo.find(omit(chatlogArgs, 'other'), chatlogArgs.other);
  }

  @Mutation(() => Boolean)
  async chatlogDelete(@Args('id') id: number) {
    const deletedChatlog = await this.chatlogRepo.findOneOrFail({id});
    pubSub.publish('chatlogDeleted', {chatlogDeleted: deletedChatlog});
    await this.chatlogRepo.delete({id});
    return true;
  }

  @Subscription(() => ChatlogModel)
  chatlogDeleted() {
    return pubSub.asyncIterator('chatlogDeleted');
  }
}
