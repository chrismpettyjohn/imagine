import {In} from 'typeorm';
import {v4 as uuidv4} from 'uuid';
import {BetaCodeModel} from './beta-code.model';
import {UserEntity} from '../database/user.entity';
import {BadRequestException} from '@nestjs/common';
import {HasSession} from '../session/has-session.decorator';
import {GetSession} from '../session/get-session.decorator';
import {Args, Mutation, Resolver, Query} from '@nestjs/graphql';
import {BetaCodeRepository} from '../database/beta-code.repository';
import {
  BetaCodeFilterManyInput,
  BetaCodeFilterOneInput,
  BetaCodeRedeemInput,
} from './beta-code.input';

@Resolver(() => BetaCodeModel)
export class BetaCodeResolver {
  constructor(private readonly betaCodeRepo: BetaCodeRepository) {}

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
      take: filter.limit,
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
  async betaCodeCreate(): Promise<BetaCodeModel> {
    const betaCode = uuidv4();
    const newBetaCode = await this.betaCodeRepo.create({
      betaCode,
    });
    return BetaCodeModel.fromEntity(newBetaCode);
  }

  @Mutation(() => Boolean)
  @HasSession()
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
