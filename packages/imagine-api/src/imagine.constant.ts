import {UserEntity} from './user/user.entity';
import {RankEntity} from './rank/rank.entity';
import {SessionEntity} from './session/session.entity';
import {UserVipStatus} from './user/user.types';

export const imagineDatabaseEntities = [SessionEntity, UserEntity, RankEntity];

export function getEnvOrFail(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing environment token ${key}`);
  }

  return value;
}

export const IMAGINE_JWT_SECRET: string = getEnvOrFail('JWT_SECRET');
export const IMAGINE_JWT_EXPIRATION_IN_MS = Number(getEnvOrFail('JWT_EXPIRATION_IN_MS'));

export const IMAGINE_DEFAULT_CREDITS = Number(getEnvOrFail('DEFAULT_CREDITS'));
export const IMAGINE_DEFAULT_VIP_POINTS = Number(getEnvOrFail('DEFAULT_VIP_POINTS'));
export const IMAGINE_DEFAULT_ACTIVITY_POINTS = Number(getEnvOrFail('DEFAULT_ACTIVITY_POINTS'));
export const IMAGINE_DEFAULT_MOTTO: string = getEnvOrFail('DEFAULT_MOTTO');
export const IMAGINE_DEFAULT_LOOK: string = getEnvOrFail('DEFAULT_LOOK');
export const IMAGINE_DEFAULT_HOME_ROOM = Number(getEnvOrFail('DEFAULT_HOME_ROOM'));
export const IMAGINE_DEFAULT_VIP_STATUS: UserVipStatus =
  getEnvOrFail('DEFAULT_VIP_STATUS') === 'true' ? UserVipStatus.Yes : UserVipStatus.No;
export const IMAGINE_DEFAULT_RANK = Number(getEnvOrFail('DEFAULT_RANK'));
export const IMAGINE_DEFAULT_VIP_RANK = Number(getEnvOrFail('DEFAULT_VIP_RANK'));
