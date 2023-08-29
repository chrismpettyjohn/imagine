import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {GroupEntity} from './group.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';

@Injectable()
export class GroupRepository extends BaseRepository<GroupEntity> {
  constructor(
    @InjectRepository(GroupEntity) groupRepo: Repository<GroupEntity>
  ) {
    super(groupRepo);
  }
}
