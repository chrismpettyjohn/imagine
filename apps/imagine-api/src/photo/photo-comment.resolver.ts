import {In} from 'typeorm';
import {UserEntity} from '../database/user.entity';
import {PhotoCommentModel} from './photo-comment.model';
import {HasSession} from '../session/has-session.decorator';
import {GetSession} from '../session/get-session.decorator';
import {PhotoCommentService} from './photo-comment.service';
import {PhotoCommentCreateInput} from './photo-comment.input';
import {PhotoFilterManyInput, PhotoFilterOneInput} from './photo.input';
import {PhotoCommentDataloaderService} from './photo-comment.dataloader';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';

@Resolver(() => PhotoCommentModel)
export class PhotoCommentResolver {
  constructor(
    private readonly photoCommentService: PhotoCommentService,
    private readonly photoCommentDataloaderService: PhotoCommentDataloaderService
  ) {}

  @Query(() => PhotoCommentModel)
  async photoComment(
    @Args('filter') filter: PhotoFilterOneInput
  ): Promise<PhotoCommentModel> {
    return this.photoCommentDataloaderService.loadById(filter.id);
  }

  @Query(() => [PhotoCommentModel])
  photoComments(
    @Args('filter', {type: () => PhotoFilterManyInput, nullable: true})
    filter: PhotoFilterManyInput
  ): Promise<PhotoCommentModel[]> {
    return this.photoCommentService.findMany({
      id: filter?.ids && In(filter.ids),
      userID: filter?.userIDs && In(filter.userIDs),
    });
  }

  @Mutation(() => PhotoCommentModel)
  @HasSession()
  async photoCommentCreate(
    @Args('input', {type: () => PhotoCommentCreateInput})
    input: PhotoCommentCreateInput,
    @GetSession() session: UserEntity
  ): Promise<PhotoCommentModel> {
    return this.photoCommentService.create({
      userID: session.id!,
      comment: input.comment,
      resourceID: input.photoID,
    });
  }

  @Mutation(() => Boolean)
  async photoCommentDelete(@Args('id') id: number) {
    await this.photoCommentService.delete(id);
    await this.photoCommentDataloaderService.clearByID(id);
    return true;
  }
}
