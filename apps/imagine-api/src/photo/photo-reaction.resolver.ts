import {In} from 'typeorm';
import {UserEntity} from '../database/user.entity';
import {PhotoReactionModel} from './photo-reaction.model';
import {HasSession} from '../session/has-session.decorator';
import {GetSession} from '../session/get-session.decorator';
import {PhotoReactionService} from './photo-reaction.service';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {PhotoFilterManyInput, PhotoFilterOneInput} from './photo.input';
import {PhotoReactionDataloaderService} from './photo-reaction.dataloader';
import {
  PhotoReactionCreateInput,
  PhotoReactionFilterOneInput,
} from './photo-reaction.input';
import {UnauthorizedException} from '@nestjs/common';
import {UserRepository} from '../database/user.repository';
import {UserModel} from '../user/user.model';

@Resolver(() => PhotoReactionModel)
export class PhotoReactionResolver {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly photoReactionService: PhotoReactionService,
    private readonly photoReactionDataloaderService: PhotoReactionDataloaderService
  ) {}

  @ResolveField(() => UserModel)
  user(@Parent() photoReaction: PhotoReactionModel): Promise<UserModel> {
    return this.userRepo.findOneOrFail({id: photoReaction.userID});
  }

  @Query(() => PhotoReactionModel)
  async photoReaction(
    @Args('filter') filter: PhotoFilterOneInput
  ): Promise<PhotoReactionModel> {
    return this.photoReactionDataloaderService.loadById(filter.id);
  }

  @Query(() => [PhotoReactionModel])
  photoReactions(
    @Args('filter', {type: () => PhotoFilterManyInput, nullable: true})
    filter: PhotoFilterManyInput
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
    @GetSession() session: UserEntity
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
    @GetSession() session: UserEntity
  ) {
    const matchingPhotoReaction = await this.photoReactionService.findOne({id});
    const userOwnsPhotoReaction = matchingPhotoReaction.userID === session.id!;
    if (!userOwnsPhotoReaction) {
      throw new UnauthorizedException();
    }
    await this.photoReactionService.delete(id);
    await this.photoReactionDataloaderService.clearByID(id);
    return true;
  }
}
