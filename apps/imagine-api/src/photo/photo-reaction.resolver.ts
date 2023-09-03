import {In} from 'typeorm';
import {UserEntity} from '../database/user.entity';
import {PhotoReactionModel} from './photo-reaction.model';
import {HasSession} from '../session/has-session.decorator';
import {GetSession} from '../session/get-session.decorator';
import {PhotoReactionService} from './photo-reaction.service';
import {PhotoReactionCreateInput} from './photo-reaction.input';
import {PhotoFilterManyInput, PhotoFilterOneInput} from './photo.input';
import {PhotoReactionDataloaderService} from './photo-reaction.dataloader';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';

@Resolver(() => PhotoReactionModel)
export class PhotoReactionResolver {
  constructor(
    private readonly photoReactionService: PhotoReactionService,
    private readonly photoReactionDataloaderService: PhotoReactionDataloaderService
  ) {}

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
  async photoReactionCreate(
    @Args('input', {type: () => PhotoReactionCreateInput})
    input: PhotoReactionCreateInput,
    @GetSession() session: UserEntity
  ): Promise<PhotoReactionModel> {
    return this.photoReactionService.create({
      userID: session.id!,
      reaction: input.reaction,
      resourceID: input.photoID,
    });
  }

  @Mutation(() => Boolean)
  async photoReactionDelete(@Args('id') id: number) {
    await this.photoReactionService.delete(id);
    await this.photoReactionDataloaderService.clearByID(id);
    return true;
  }
}
