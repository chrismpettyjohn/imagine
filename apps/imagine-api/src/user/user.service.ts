import DayJS from 'dayjs';
import Random from 'randomstring';
import {Injectable} from '@nestjs/common';
import {UserEntity} from '../database/user.entity';
import {DEFAULT_USER_VALUES} from './user.constant';
import {UserRepository} from '../database/user.repository';
import {ConfigRepository} from '../database/config.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly configRepo: ConfigRepository
  ) {}

  async createQuickUser(
    ipAddress: string,
    override?: Partial<UserEntity>
  ): Promise<UserEntity> {
    const config = await this.configRepo.findOneOrFail();
    const currentDate = DayJS().unix();
    const username = `${config.siteName.toUpperCase()}-${Random.generate(15)}`;
    return this.userRepo.create({
      ...DEFAULT_USER_VALUES,
      username,
      ipLast: ipAddress,
      ipRegistered: ipAddress,
      accountCreatedAt: currentDate,
      tempUser: 0,
      ...override,
    });
  }
}
