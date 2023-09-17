import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';
import {RadioRequestEntity} from './radio-request.entity';

@Injectable()
export class RadioRequestRepository extends BaseRepository<RadioRequestEntity> {
  constructor(
    @InjectRepository(RadioRequestEntity)
    radioRequestRepo: Repository<RadioRequestEntity>
  ) {
    super(radioRequestRepo);
  }
}
