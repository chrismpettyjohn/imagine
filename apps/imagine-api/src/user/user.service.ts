import DayJS from 'dayjs';
import Random from 'randomstring';
import {Injectable} from '@nestjs/common';
import {UserEntity} from '../database/user.entity';
import {DEFAULT_USER_VALUES} from './user.constant';
import {UserRepository} from '../database/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  async createQuickUser(
    ipAddress: string,
    override?: Partial<UserEntity>
  ): Promise<UserEntity> {
    console.log(ipAddress);
    console.log('LOL');
    const currentDate = DayJS().unix();
    const username = Random.generate(15);
    return this.userRepo.create({
      ...DEFAULT_USER_VALUES,
      username,
      ipLast: ipAddress,
      ipRegistered: ipAddress,
      accountCreatedAt: currentDate,
      ...override,
    });
  }
}
