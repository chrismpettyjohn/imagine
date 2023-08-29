import {In} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {GroupEntity} from '../database/group.entity';
import {GroupRepository} from '../database/group.repository';
import {BaseDataloaderService} from '../utility/base.dataloader';

@Injectable()
export class GroupDataloaderService extends BaseDataloaderService<GroupEntity> {
  constructor(private readonly groupRepo: GroupRepository) {
    super(async (ids: number[]) => {
      if (ids.length === 0) {
        return [];
      }

      return this.groupRepo.find({
        id: In(ids),
      });
    });
  }
}
