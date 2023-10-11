import DayJS from 'dayjs';
import {In} from 'typeorm';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {StorePackageModel} from './store-package.model';
import {StorePackageRepository} from '../database/store-package-repository';
import {
  StorePackageCreateInput,
  StorePackageFilterManyInput,
  StorePackageFilterOneInput,
} from './store-package.input';
import {HasScope} from '../session/has-scope.decorator';

@Resolver(() => StorePackageModel)
export class StorePackageResolver {
  constructor(private readonly storePackageRepo: StorePackageRepository) {}

  @Query(() => StorePackageModel)
  async storePackage(
    @Args('filter', {type: () => StorePackageFilterOneInput})
    filter: StorePackageFilterOneInput
  ): Promise<StorePackageModel> {
    const matchingPackage = await this.storePackageRepo.findOneOrFail({
      id: filter.id,
    });
    return StorePackageModel.fromEntity(matchingPackage);
  }
  @Query(() => [StorePackageModel])
  async storePackages(
    @Args('filter', {type: () => StorePackageFilterManyInput, nullable: true})
    filter?: StorePackageFilterManyInput
  ): Promise<StorePackageModel[]> {
    const matchingPackages = await this.storePackageRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
      },
      skip: filter?.skip,
      take: filter?.limit ?? 25,
    });
    return matchingPackages.map(StorePackageModel.fromEntity);
  }

  @Mutation(() => StorePackageModel)
  @HasScope('manageStore')
  async storePackageCreate(
    @Args('input', {type: () => StorePackageCreateInput})
    input: StorePackageCreateInput
  ): Promise<StorePackageModel> {
    const currentDate = DayJS().unix();
    const newPackage = await this.storePackageRepo.create({
      ...input,
      isRecurring: input.isRecurring ? 1 : 0,
      createdAt: currentDate,
      updatedAt: currentDate,
    });
    return StorePackageModel.fromEntity(newPackage);
  }
}
