import Dayjs from 'dayjs';
import {In} from 'typeorm';
import {UserEntity} from '../database/user.entity';
import {UnauthorizedException} from '@nestjs/common';
import {RadioRequestModel} from './radio-request.model';
import {HasScope} from '../session/has-scope.decorator';
import {HasSession} from '../session/has-session.decorator';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {RadioRequestStatus} from '../database/radio-request.entity';
import {RadioRequestRepository} from '../database/radio-request.repository';
import {
  RadioRequestCreateInput,
  RadioRequestFilterManyInput,
  RadioRequestFilterOneInput,
  RadioRequestReviewInput,
} from './radio-request.input';
import {UserRepository} from '../database/user.repository';
import {UserModel} from '../user/user.model';
import {GetUser} from '../session/get-user.decorator';

@Resolver(() => RadioRequestModel)
export class RadioRequestResolver {
  constructor(
    private readonly radioRequestRepo: RadioRequestRepository,
    private readonly userRepo: UserRepository
  ) {}

  @ResolveField(() => UserModel, {nullable: true})
  async user(
    @Parent() radioRequestModel: RadioRequestModel
  ): Promise<UserModel> {
    return this.userRepo.findOneOrFail({id: radioRequestModel.userID});
  }

  @ResolveField(() => UserModel, {nullable: true})
  async reviewingUser(
    @Parent() radioRequestModel: RadioRequestModel
  ): Promise<UserModel | null> {
    return this.userRepo.findOne({
      where: {
        id: radioRequestModel.reviewingUserID,
      },
    });
  }

  @Query(() => RadioRequestModel)
  async radioRequest(
    @Args({name: 'filter', type: () => RadioRequestFilterOneInput})
    filter: RadioRequestFilterOneInput
  ): Promise<RadioRequestModel> {
    const matchingRadioRequest = await this.radioRequestRepo.findOneOrFail({
      id: filter.id,
    });
    return RadioRequestModel.fromEntity(matchingRadioRequest);
  }

  @Query(() => [RadioRequestModel])
  async radioRequests(
    @Args({name: 'filter', type: () => RadioRequestFilterManyInput})
    filter: RadioRequestFilterManyInput
  ): Promise<RadioRequestModel[]> {
    const matchingRadioRequests = await this.radioRequestRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        userID: filter.userIDs && In(filter.userIDs),
        status: filter.statuses && In(filter.statuses),
        reviewingUserID: filter.reviewingUserIDs && In(filter.reviewingUserIDs),
      },
      take: filter.limit,
    });
    return matchingRadioRequests.map(RadioRequestModel.fromEntity);
  }

  @Mutation(() => RadioRequestModel)
  @HasSession()
  async radioRequestCreate(
    @Args({name: 'input', type: () => RadioRequestCreateInput})
    input: RadioRequestCreateInput,
    @GetUser() user: UserEntity
  ): Promise<RadioRequestModel> {
    const currentDate = Dayjs().unix();
    const newRadioRequest = await this.radioRequestRepo.create({
      userID: user.id!,
      content: input.content,
      status: RadioRequestStatus.Requested,
      createdAt: currentDate,
      updatedAt: currentDate,
    });
    return RadioRequestModel.fromEntity(newRadioRequest);
  }

  @Mutation(() => Boolean)
  @HasSession()
  async radioRequestUpdate(
    @Args({name: 'filter', type: () => RadioRequestFilterOneInput})
    filter: RadioRequestFilterOneInput,
    @Args({name: 'input', type: () => RadioRequestCreateInput})
    input: RadioRequestCreateInput,
    @GetUser() user: UserEntity
  ): Promise<boolean> {
    const matchingRadioRequest = await this.radioRequestRepo.findOneOrFail({
      id: filter.id,
    });
    const userOwnsRadioRequest = matchingRadioRequest.userID === user.id!;
    if (!userOwnsRadioRequest) {
      throw new UnauthorizedException();
    }
    const currentDate = Dayjs().unix();
    await this.radioRequestRepo.update(
      {id: filter.id},
      {
        content: input.content,
        updatedAt: currentDate,
      }
    );
    return true;
  }

  @Mutation(() => Boolean)
  @HasScope('manageRadioRequests')
  async radioRequestReview(
    @Args({name: 'filter', type: () => RadioRequestFilterOneInput})
    filter: RadioRequestFilterOneInput,
    @Args({name: 'input', type: () => RadioRequestReviewInput})
    input: RadioRequestReviewInput,
    @GetUser() user: UserEntity
  ): Promise<boolean> {
    const currentDate = Dayjs().unix();
    await this.radioRequestRepo.update(
      {id: filter.id},
      {
        status: input.status,
        reviewedAt: currentDate,
        reviewingUserID: user.id!,
      }
    );
    return true;
  }
}
