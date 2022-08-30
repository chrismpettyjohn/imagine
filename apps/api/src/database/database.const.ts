import {RankEntity} from './rank.entity';
import {UserEntity} from './user.entity';
import {ArticleEntity} from './article.entity';
import {SessionEntity} from './session.entity';
import {UserRepository} from './user.repository';
import {RankRepository} from './rank.repository';
import {SessionRepository} from './session.repository';
import {ArticleRepository} from './article.repository';

export const databaseEntities = [ArticleEntity, RankEntity, SessionEntity, UserEntity];

export const databaseRepositories = [RankRepository, SessionRepository, UserRepository, ArticleRepository];
