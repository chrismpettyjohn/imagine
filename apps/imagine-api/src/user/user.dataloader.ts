import { In } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../database/user.entity';
import { UserRepository } from '../database/user.repository';
import { BaseDataloaderService } from '../utility/base.dataloader';

@Injectable()
export class UserDataloaderService extends BaseDataloaderService<UserEntity> {
  constructor(private readonly userRepo: UserRepository) {
    super(async (ids: number[]) => {
      if (ids.length === 0) {
        return [];
      }

      return this.userRepo._find({
        id: In(ids),
      });
    });
  }
}
