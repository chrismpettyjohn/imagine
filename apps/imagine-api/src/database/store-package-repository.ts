import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';
import {StorePackageEntity} from './store-package.entity';

@Injectable()
export class StorePackageRepository extends BaseRepository<StorePackageEntity> {
  constructor(
    @InjectRepository(StorePackageEntity)
    storePackageRepo: Repository<StorePackageEntity>
  ) {
    super(storePackageRepo);
  }
}
