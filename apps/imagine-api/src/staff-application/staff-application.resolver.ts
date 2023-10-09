import DayJS from 'dayjs';
import {In} from 'typeorm';
import {UserModel} from '../user/user.model';
import {UserEntity} from '../database/user.entity';
import {UnauthorizedException} from '@nestjs/common';
import {HasScope} from '../session/has-scope.decorator';
import {UserRepository} from '../database/user.repository';
import {RankRepository} from '../database/rank.repository';
import {StaffApplicationModel} from './staff-application.model';
import {StaffApplicationRepository} from '../database/staff-application.repository';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import {
  StaffApplicationCreateInput,
  StaffApplicationFilterManyInput,
  StaffApplicationFilterOneInput,
  StaffApplicationReviewInput,
} from './staff-application.input';
import {HasSession} from '../session/has-session.decorator';
import {GetUser} from '../session/get-user.decorator';

@Resolver(() => StaffApplicationModel)
export class StaffApplicationResolver {
  constructor(
    private readonly rankRepo: RankRepository,
    private readonly userRepo: UserRepository,
    private readonly staffApplicationRepo: StaffApplicationRepository
  ) {}

  @ResolveField(() => UserModel, {nullable: true})
  async user(
    @Parent() staffApplication: StaffApplicationModel
  ): Promise<UserModel> {
    return this.userRepo.findOneOrFail({id: staffApplication.userID});
  }

  @ResolveField(() => UserModel, {nullable: true})
  async reviewingUser(
    @Parent() staffApplication: StaffApplicationModel
  ): Promise<UserModel | null> {
    return this.userRepo.findOne({
      where: {
        id: staffApplication.reviewingUserID ?? -1,
      },
    });
  }

  @Query(() => StaffApplicationModel)
  async staffApplication(
    @Args({name: 'filter', type: () => StaffApplicationFilterOneInput})
    filter: StaffApplicationFilterOneInput
  ): Promise<StaffApplicationModel> {
    const matchingStaffApplication =
      await this.staffApplicationRepo.findOneOrFail({
        id: filter.id,
      });
    return StaffApplicationModel.fromEntity(matchingStaffApplication);
  }

  @Query(() => [StaffApplicationModel])
  async staffApplications(
    @Args({name: 'filter', type: () => StaffApplicationFilterManyInput})
    filter: StaffApplicationFilterManyInput
  ): Promise<StaffApplicationModel[]> {
    const matchingStaffApplications = await this.staffApplicationRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        // TODO: Prevent users from reading out users staff apps
        userID: filter.userIDs && In(filter.userIDs),
        rankID: filter.rankIDs && In(filter.rankIDs),
      },
      take: filter?.limit ?? 25,
    });
    return matchingStaffApplications.map(StaffApplicationModel.fromEntity);
  }

  @Mutation(() => StaffApplicationModel)
  @HasSession()
  async staffApplicationCreate(
    @Args({name: 'input', type: () => StaffApplicationCreateInput})
    input: StaffApplicationCreateInput,
    @GetUser() user: UserEntity
  ): Promise<StaffApplicationModel> {
    const currentDate = DayJS().unix();
    const newStaffApplication = await this.staffApplicationRepo.create({
      userID: user.id!,
      rankID: input.rankID,
      content: input.content,
      createdAt: currentDate,
      updatedAt: currentDate,
      applicationAccepted: 0,
    });
    return StaffApplicationModel.fromEntity(newStaffApplication);
  }

  @Mutation(() => Boolean)
  @HasScope('manageStaffApplications')
  async staffApplicationReview(
    @Args({name: 'filter', type: () => StaffApplicationFilterOneInput})
    filter: StaffApplicationFilterOneInput,
    @Args({name: 'input', type: () => StaffApplicationReviewInput})
    input: StaffApplicationReviewInput,
    @GetUser() user: UserEntity
  ): Promise<boolean> {
    const currentDate = DayJS().unix();
    await this.staffApplicationRepo.update(
      {id: filter.id},
      {
        reviewedAt: currentDate,
        reviewingUserID: user.id!,
        applicationAccepted: input.accepted ? 1 : 0,
      }
    );
    return true;
  }

  @Mutation(() => Boolean)
  async staffApplicationDelete(
    @Args({name: 'filter', type: () => StaffApplicationFilterOneInput})
    filter: StaffApplicationFilterOneInput,
    @GetUser() user: UserEntity
  ): Promise<boolean> {
    await this.userCanAccessStaffApplication(filter.id, user);
    await this.staffApplicationRepo.delete({id: filter.id});
    return true;
  }

  private userCanAccessStaffApplication = async (
    staffApplicationID: number,
    user: UserEntity
  ): Promise<void> => {
    const matchingStaffApplication =
      await this.staffApplicationRepo.findOneOrFail({id: staffApplicationID});

    const userOwnsStaffApplication =
      matchingStaffApplication.userID === user.id!;

    if (userOwnsStaffApplication) {
      return;
    }

    const userRank = await this.rankRepo.findOneOrFail({id: user.rankID});

    const userCanManageStaffApplications =
      userRank.scopes.manageStaffApplications;

    if (userCanManageStaffApplications) {
      return;
    }

    throw new UnauthorizedException();
  };
}
