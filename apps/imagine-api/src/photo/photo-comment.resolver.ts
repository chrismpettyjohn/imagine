import {In} from 'typeorm';
import {UserModel} from '../user/user.model';
import {UserEntity} from '../database/user.entity';
import {UnauthorizedException} from '@nestjs/common';
import {PhotoCommentModel} from './photo-comment.model';
import {GetUser} from '../session/get-user.decorator';
import {PhotoReactionModel} from './photo-reaction.model';
import {UserRepository} from '../database/user.repository';
import {HasSession} from '../session/has-session.decorator';
import {PhotoCommentService} from './photo-comment.service';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {
  PhotoCommentCreateInput,
  PhotoCommentFilterManyInput,
  PhotoCommentFilterOneInput,
} from './photo-comment.input';

@Resolver(() => PhotoCommentModel)
export class PhotoCommentResolver {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly photoCommentService: PhotoCommentService
  ) {}

  @ResolveField(() => UserModel, {nullable: true})
  user(@Parent() photoReaction: PhotoReactionModel): Promise<UserModel | null> {
    return this.userRepo.findOne({
      where: {
        id: photoReaction.userID,
      },
    });
  }

  @Query(() => PhotoCommentModel)
  async photoComment(
    @Args('filter') filter: PhotoCommentFilterOneInput
  ): Promise<PhotoCommentModel> {
    return this.photoCommentService.findOne({id: filter.id});
  }

  @Query(() => [PhotoCommentModel])
  photoComments(
    @Args('filter', {type: () => PhotoCommentFilterManyInput, nullable: true})
    filter: PhotoCommentFilterManyInput
  ): Promise<PhotoCommentModel[]> {
    return this.photoCommentService.findMany({
      id: filter?.ids && In(filter.ids),
      resourceID: filter.photoIDs && In(filter.photoIDs),
      userID: filter?.userIDs && In(filter.userIDs),
    });
  }

  @Mutation(() => PhotoCommentModel)
  @HasSession()
  async photoCommentCreate(
    @Args('input', {type: () => PhotoCommentCreateInput})
    input: PhotoCommentCreateInput,
    @GetUser() session: UserEntity
  ): Promise<PhotoCommentModel> {
    return this.photoCommentService.create({
      userID: session.id!,
      comment: input.comment,
      resourceID: input.photoID,
    });
  }

  @Mutation(() => PhotoCommentModel)
  @HasSession()
  async photoCommentUpdate(
    @Args('filter', {type: () => PhotoCommentFilterOneInput})
    filter: PhotoCommentFilterOneInput,
    @Args('input', {type: () => PhotoCommentCreateInput})
    input: PhotoCommentCreateInput,
    @GetUser() session: UserEntity
  ): Promise<PhotoCommentModel> {
    const matchingPhotoComment = await this.photoCommentService.findOne({
      id: filter.id,
    });
    const userOwnsPhotoComment = matchingPhotoComment.userID === session.id!;
    if (!userOwnsPhotoComment) {
      throw new UnauthorizedException();
    }
    await this.photoCommentService.update(filter.id, input.comment);
    return this.photoComment(filter);
  }

  @Mutation(() => Boolean)
  async photoCommentDelete(
    @Args('id') id: number,
    @GetUser() session: UserEntity
  ) {
    const matchingPhotoComment = await this.photoCommentService.findOne({id});
    const userOwnsPhotoComment = matchingPhotoComment.userID === session.id!;
    if (!userOwnsPhotoComment) {
      throw new UnauthorizedException();
    }
    await this.photoCommentService.delete(id);
    return true;
  }
}
