import {In} from 'typeorm';
import {UserModel} from '../user/user.model';
import {UserEntity} from '../database/user.entity';
import {UnauthorizedException} from '@nestjs/common';
import {GetUser} from '../session/get-user.decorator';
import {PhotoReactionModel} from './photo-reaction.model';
import {HasSession} from '../session/has-session.decorator';
import {UserRepository} from '../database/user.repository';
import {PhotoReactionService} from './photo-reaction.service';

import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {
  PhotoReactionCreateInput,
  PhotoReactionFilterManyInput,
  PhotoReactionFilterOneInput,
} from './photo-reaction.input';

@Resolver(() => PhotoReactionModel)
export class PhotoReactionResolver {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly photoReactionService: PhotoReactionService
  ) {}

  @ResolveField(() => UserModel)
  user(@Parent() photoReaction: PhotoReactionModel): Promise<UserModel> {
    return this.userRepo.findOneOrFail({id: photoReaction.userID});
  }

  @Query(() => PhotoReactionModel)
  async photoReaction(
    @Args('filter') filter: PhotoReactionFilterOneInput
  ): Promise<PhotoReactionModel> {
    return this.photoReactionService.findOne({id: filter.id});
  }

  @Query(() => [PhotoReactionModel])
  photoReactions(
    @Args('filter', {type: () => PhotoReactionFilterManyInput, nullable: true})
    filter: PhotoReactionFilterManyInput
  ): Promise<PhotoReactionModel[]> {
    return this.photoReactionService.findMany({
      id: filter?.ids && In(filter.ids),
      userID: filter?.userIDs && In(filter.userIDs),
    });
  }

  @Mutation(() => PhotoReactionModel)
  @HasSession()
  async photoReactionUpdate(
    @Args('filter', {type: () => PhotoReactionFilterOneInput})
    filter: PhotoReactionFilterOneInput,
    @Args('input', {type: () => PhotoReactionCreateInput})
    input: PhotoReactionCreateInput,
    @GetUser() session: UserEntity
  ): Promise<PhotoReactionModel> {
    const matchingPhotoReaction = await this.photoReactionService.findOne({
      id: filter.id,
    });
    const userOwnsPhotoReaction = matchingPhotoReaction.userID === session.id!;
    if (!userOwnsPhotoReaction) {
      throw new UnauthorizedException();
    }
    return this.photoReactionService.create({
      userID: session.id!,
      reaction: input.reaction,
      resourceID: input.photoID,
    });
  }

  @Mutation(() => Boolean)
  async photoReactionDelete(
    @Args('id') id: number,
    @GetUser() session: UserEntity
  ) {
    const matchingPhotoReaction = await this.photoReactionService.findOne({id});
    const userOwnsPhotoReaction = matchingPhotoReaction.userID === session.id!;
    if (!userOwnsPhotoReaction) {
      throw new UnauthorizedException();
    }
    await this.photoReactionService.delete(id);
    return true;
  }
}
