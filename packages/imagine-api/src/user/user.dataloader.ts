import {In} from 'typeorm';
import {UserEntity} from './user.entity';
import {Injectable} from '@nestjs/common';
import {UserRepository} from './user.repository';
import {BaseDataloaderService} from '../utility/base.dataloader';

@Injectable()
export class UserDataloaderService extends BaseDataloaderService<UserEntity> {
  constructor(private readonly userRepo: UserRepository) {
    super(async (ids: number[]) => {
      if (ids.length === 0) {
        return [];
      }

      return this.userRepo.find({
        id: In(ids),
      });
    });
  }
}
