import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';
import {StaffApplicationEntity} from './staff-application.entity';

@Injectable()
export class StaffApplicationRepository extends BaseRepository<StaffApplicationEntity> {
  constructor(
    @InjectRepository(StaffApplicationEntity)
    staffApplicationRepo: Repository<StaffApplicationEntity>
  ) {
    super(staffApplicationRepo);
  }
}
