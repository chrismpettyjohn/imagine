import {RankEntity} from './rank.entity';
import {UserEntity} from './user.entity';
import {SessionEntity} from './session.entity';
import {UserRepository} from './user.repository';
import {RankRepository} from './rank.repository';
import {SessionRepository} from './session.repository';

export const databaseEntities = [RankEntity, SessionEntity, UserEntity];

export const databaseRepositories = [RankRepository, SessionRepository, UserRepository];
