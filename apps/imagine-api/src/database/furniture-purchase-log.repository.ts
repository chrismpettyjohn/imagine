import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';
import {FurniturePurchaseLogEntity} from './furniture-purchase-log.entity';

@Injectable()
export class FurniturePurchaseLogRepository extends BaseRepository<FurniturePurchaseLogEntity> {
  constructor(
    @InjectRepository(FurniturePurchaseLogEntity)
    furniturePurchaseLogRepo: Repository<FurniturePurchaseLogEntity>
  ) {
    super(furniturePurchaseLogRepo);
  }
}
