import {In} from 'typeorm';
import {v4 as uuidv4} from 'uuid';
import {BetaCodeModel} from './beta-code.model';
import {UserEntity} from '../database/user.entity';
import {BadRequestException} from '@nestjs/common';
import {HasSession} from '../session/has-session.decorator';
import {GetSession} from '../session/get-session.decorator';
import {
  Args,
  Mutation,
  Resolver,
  Query,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import {BetaCodeRepository} from '../database/beta-code.repository';
import {
  BetaCodeFilterManyInput,
  BetaCodeFilterOneInput,
  BetaCodeRedeemInput,
} from './beta-code.input';
import {HasScope} from '../session/has-scope.decorator';
import {UserRepository} from '../database/user.repository';
import {UserModel} from '../user/user.model';
import {BetaCodeEntity} from '../database/beta-code.entity';

@Resolver(() => BetaCodeModel)
@HasSession()
export class BetaCodeResolver {
  constructor(
    private readonly betaCodeRepo: BetaCodeRepository,
    private readonly userRepo: UserRepository
  ) {}

  @ResolveField(() => UserModel, {nullable: true})
  @HasScope('manageBetaCodes')
  async user(@Parent() betaCode: BetaCodeEntity): Promise<UserModel | null> {
    return this.userRepo.findOne({
      where: {
        id: betaCode.userID ?? -1,
      },
    });
  }

  @Query(() => [BetaCodeModel])
  async betaCodes(
    @Args('filter', {type: () => BetaCodeFilterManyInput})
    filter: BetaCodeFilterManyInput
  ): Promise<BetaCodeModel[]> {
    const matchingBetaCodes = await this.betaCodeRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        betaCode: filter.betaCodes && In(filter.betaCodes),
        userID: filter.userIDs && In(filter.userIDs),
      },
      take: filter.limit ?? 25,
    });
    return matchingBetaCodes.map(BetaCodeModel.fromEntity);
  }

  @Query(() => BetaCodeModel)
  async betaCode(
    @Args('filter', {type: () => BetaCodeFilterOneInput})
    filter: BetaCodeFilterOneInput
  ): Promise<BetaCodeModel> {
    if (!filter.id && !filter.betaCode) {
      throw new BadRequestException();
    }
    const matchingBetaCode = await this.betaCodeRepo.findOneOrFail({
      id: filter.id,
      betaCode: filter.betaCode,
    });
    return BetaCodeModel.fromEntity(matchingBetaCode);
  }

  @Mutation(() => BetaCodeModel)
  @HasScope('manageBetaCodes')
  async betaCodeCreate(): Promise<BetaCodeModel> {
    const betaCode = uuidv4();
    const newBetaCode = await this.betaCodeRepo.create({
      betaCode,
    });
    return BetaCodeModel.fromEntity(newBetaCode);
  }

  @Mutation(() => Boolean)
  @HasScope('manageBetaCodes')
  async betaCodeDelete(
    @Args('filter', {type: () => BetaCodeFilterOneInput})
    filter: BetaCodeFilterOneInput
  ): Promise<boolean> {
    await this.betaCodeRepo.delete({
      id: filter.id,
      betaCode: filter.betaCode,
    });
    return true;
  }
  async betaCodeRedeem(
    @Args('input', {type: () => BetaCodeRedeemInput})
    input: BetaCodeRedeemInput,
    @GetSession() session: UserEntity
  ): Promise<boolean> {
    const matchingBetaCode = await this.betaCodeRepo.findOneOrFail({
      betaCode: input.betaCode,
    });
    await this.betaCodeRepo.update(
      {id: matchingBetaCode.id!},
      {userID: session.id!}
    );
    return true;
  }
}
