import {ConfigModel} from './config.model';
import {ConfigUpdateInput} from './config.input';
import {HasScope} from '../session/has-scope.decorator';
import {ConfigDataloaderService} from './config.dataloader';
import {ConfigRepository} from '../database/config.repository';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';

@Resolver(() => ConfigModel)
export class ConfigResolver {
  constructor(
    private readonly configRepo: ConfigRepository,
    private readonly configDataLoader: ConfigDataloaderService
  ) {}

  @Query(() => ConfigModel)
  async config(): Promise<ConfigModel> {
    return this.configDataLoader.loadById(1);
  }

  @Mutation(() => Boolean)
  @HasScope('manageSite')
  async configUpdate(
    @Args('configUpdateInput') configUpdateInput: ConfigUpdateInput
  ) {
    await this.configRepo.update(
      {id: 1},
      ConfigUpdateInput.toEntity(configUpdateInput)
    );
    this.configDataLoader.clearByID(1);
    return true;
  }
}
