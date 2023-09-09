import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';
import {GroupMembershipEntity} from './group-membership.entity';

@Injectable()
export class GroupMembershipRepository extends BaseRepository<GroupMembershipEntity> {
  constructor(
    @InjectRepository(GroupMembershipEntity)
    groupMembershipRepo: Repository<GroupMembershipEntity>
  ) {
    super(groupMembershipRepo);
  }
}
