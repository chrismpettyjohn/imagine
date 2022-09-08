import {BanEntity} from './ban.entity';
import {RankEntity} from './rank.entity';
import {UserEntity} from './user.entity';
import {RoomEntity} from './room.entity';
import {BadgeEntity} from './badge.entity';
import {ConfigEntity} from './config.entity';
import {ArticleEntity} from './article.entity';
import {SessionEntity} from './session.entity';
import {BanRepository} from './ban.repository';
import {ChatlogEntity} from './chatlog.entity';
import {UserRepository} from './user.repository';
import {RankRepository} from './rank.repository';
import {RoomRepository} from './room.repository';
import {BadgeRepository} from './badge.repository';
import {ConfigRepository} from './config.repository';
import {WordFilterEntity} from './word-filter.entity';
import {SessionRepository} from './session.repository';
import {ArticleRepository} from './article.repository';
import {ChatlogRepository} from './chatlog.repository';
import {WordFilterRepository} from './word-filter.repository';
import {ArticleCommentEntity} from './article-comment.entity';
import {ArticleCommentRepository} from './article-comment.repository';

export const databaseEntities = [
  ArticleEntity,
  RankEntity,
  SessionEntity,
  UserEntity,
  ArticleCommentEntity,
  BadgeEntity,
  ConfigEntity,
  BanEntity,
  WordFilterEntity,
  ChatlogEntity,
  RoomEntity,
];

export const databaseRepositories = [
  RankRepository,
  SessionRepository,
  UserRepository,
  ArticleRepository,
  ArticleCommentRepository,
  BadgeRepository,
  ConfigRepository,
  BanRepository,
  WordFilterRepository,
  ChatlogRepository,
  RoomRepository,
];
