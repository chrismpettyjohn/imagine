import DayJS from 'dayjs';
import {In, Not, IsNull} from 'typeorm';
import {UserModel} from '../user/user.model';
import {BugReportModel} from './bug-report.model';
import {UserEntity} from '../database/user.entity';
import {GetUser} from '../session/get-user.decorator';
import {HasScope} from '../session/has-scope.decorator';
import {HasSession} from '../session/has-session.decorator';
import {UserRepository} from '../database/user.repository';
import {BugReportRepository} from '../database/bug-report.repository';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {
  BugReportCreateInput,
  BugReportFilterManyInput,
  BugReportFilterOneInput,
  BugReportUpdateInput,
} from './bug-report.input';

@Resolver(() => BugReportModel)
@HasSession()
export class BugReportResolver {
  constructor(
    private readonly bugReportRepo: BugReportRepository,
    private readonly userRepo: UserRepository
  ) {}

  @ResolveField(() => UserModel, {nullable: true})
  async reportingUser(
    @Parent() {reportingUserID}: BugReportModel
  ): Promise<UserModel | null> {
    return this.userRepo.findOne({
      where: {
        id: reportingUserID,
      },
    });
  }

  @ResolveField(() => UserModel, {nullable: true})
  async resolvingUser(
    @Parent() {resolvingUserID}: BugReportModel
  ): Promise<UserModel | null> {
    return this.userRepo.findOne({
      where: {
        id: resolvingUserID,
      },
    });
  }

  @Query(() => BugReportModel)
  async bugReport(
    @Args({name: 'filter', type: () => BugReportFilterOneInput})
    filter: BugReportFilterOneInput
  ): Promise<BugReportModel> {
    const matchingBugReport = await this.bugReportRepo.findOneOrFail({
      id: filter.id,
    });
    return BugReportModel.fromEntity(matchingBugReport);
  }

  @Query(() => [BugReportModel])
  async bugReports(
    @Args({name: 'filter', type: () => BugReportFilterManyInput})
    filter: BugReportFilterManyInput
  ): Promise<BugReportModel[]> {
    const matchingBugReports = await this.bugReportRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        reportingUserID: filter.reportingUserIDs && In(filter.reportingUserIDs),
        resolvingUserID: filter.resolvingUserIDs && In(filter.resolvingUserIDs),
        severity: filter.severity && In(filter.severity),
        url: filter.urls && In(filter.urls),
        resolvedAt:
          filter.isOpen !== undefined
            ? filter.isOpen
              ? Not(IsNull())
              : IsNull()
            : undefined,
      },
      skip: filter?.skip,
      take: filter?.limit ?? 25,
    });
    return matchingBugReports.map(BugReportModel.fromEntity);
  }

  @Mutation(() => BugReportModel)
  @HasSession()
  async bugReportCreate(
    @Args({name: 'input', type: () => BugReportCreateInput})
    input: BugReportCreateInput,
    @GetUser() session: UserEntity
  ): Promise<BugReportModel> {
    const currentTime = DayJS().unix();
    const newBugReport = await this.bugReportRepo.create({
      url: input.url,
      content: input.content,
      severity: 1,
      reportingUserID: session.id!,
      createdAt: currentTime,
      updatedAt: currentTime,
    });
    return BugReportModel.fromEntity(newBugReport);
  }

  @Mutation(() => Boolean)
  @HasScope('manageBugReports')
  async bugReportUpdate(
    @Args({name: 'filter', type: () => BugReportFilterOneInput})
    filter: BugReportFilterOneInput,
    @Args({name: 'input', type: () => BugReportUpdateInput})
    input: BugReportUpdateInput
  ): Promise<boolean> {
    const currentTime = DayJS().unix();
    await this.bugReportRepo.update(
      {id: filter.id},
      {
        ...input,
        updatedAt: currentTime,
      }
    );
    return true;
  }

  @Mutation(() => Boolean)
  @HasScope('manageBugReports')
  async bugReportResolve(
    @Args({name: 'filter', type: () => BugReportFilterOneInput})
    filter: BugReportFilterOneInput,
    @GetUser() session: UserEntity
  ): Promise<boolean> {
    const currentTime = DayJS().unix();
    await this.bugReportRepo.update(
      {id: filter.id},
      {
        resolvedAt: currentTime,
        resolvingUserID: session.id!,
        updatedAt: currentTime,
      }
    );
    return true;
  }

  @Mutation(() => Boolean)
  @HasScope('manageBugReports')
  async bugReportOpen(
    @Args({name: 'filter', type: () => BugReportFilterOneInput})
    filter: BugReportFilterOneInput
  ): Promise<boolean> {
    const currentTime = DayJS().unix();
    await this.bugReportRepo.update(
      {id: filter.id},
      {
        resolvedAt: null as any,
        resolvingUserID: null as any,
        updatedAt: currentTime,
      }
    );
    return true;
  }

  @Mutation(() => Boolean)
  @HasScope('manageBugReports')
  async bugReportDelete(
    @Args({name: 'filter', type: () => BugReportFilterOneInput})
    filter: BugReportFilterOneInput
  ): Promise<boolean> {
    await this.bugReportRepo.delete({id: filter.id});
    return true;
  }
}
