import {omit} from 'lodash';
import {BanArgs} from './ban.args';
import {BanModel} from './ban.model';
import {BanEntity} from '../database/ban.entity';
import {UserEntity} from '../database/user.entity';
import {GetUser} from '../session/get-user.decorator';
import {BanRepository} from '../database/ban.repository';
import {HasScope} from '../session/has-scope.decorator';
import {BanCreateInput, BanUpdateInput} from './ban.input';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';

@Resolver(() => BanModel)
export class BanResolver {
  constructor(private readonly banRepo: BanRepository) {}

  @Query(() => BanModel)
  @HasScope('manageBans')
  async ban(@Args('id') id: number): Promise<BanEntity> {
    return this.banRepo.findOneOrFail({id});
  }

  @Query(() => [BanModel])
  @HasScope('manageBans')
  bans(@Args() banArgs: BanArgs): Promise<BanEntity[]> {
    return this.banRepo._find(omit(banArgs, 'other'), banArgs.other);
  }

  @Mutation(() => BanModel)
  @HasScope('manageBans')
  async banCreate(
    @Args('newBan') banCreateInput: BanCreateInput,
    @GetUser() user: UserEntity
  ): Promise<BanEntity> {
    const newBan = await this.banRepo.create({
      ...banCreateInput,
      type: 'site',
      addedByUserID: user.id!,
    });
    return newBan;
  }

  @Mutation(() => Boolean)
  @HasScope('manageBans')
  async banUpdate(
    @Args('id') id: number,
    @Args('banChanges') banChanges: BanUpdateInput
  ) {
    await this.banRepo.update({id}, banChanges);
    return true;
  }

  @Mutation(() => Boolean)
  @HasScope('manageBans')
  async banDelete(@Args('id') id: number) {
    await this.banRepo.delete({id});
    return true;
  }
}
