import {BanEntity} from './ban.entity';
import {RankEntity} from './rank.entity';
import {UserEntity} from './user.entity';
import {RoomEntity} from './room.entity';
import {GroupEntity} from './group.entity';
import {PhotoEntity} from './photo.entity';
import {ConfigEntity} from './config.entity';
import {CommentEntity} from './comment.entity';
import {ArticleEntity} from './article.entity';
import {SessionEntity} from './session.entity';
import {BanRepository} from './ban.repository';
import {ChatlogEntity} from './chatlog.entity';
import {ReactionEntity} from './reaction.entity';
import {UserRepository} from './user.repository';
import {RankRepository} from './rank.repository';
import {RoomRepository} from './room.repository';
import {LanguageEntity} from './language.entity';
import {PhotoRepository} from './photo.repository';
import {GroupRepository} from './group.repository';
import {ConfigRepository} from './config.repository';
import {WordFilterEntity} from './word-filter.entity';
import {SessionRepository} from './session.repository';
import {ArticleRepository} from './article.repository';
import {ChatlogRepository} from './chatlog.repository';
import {CommentRepository} from './comment.repository';
import {ReactionRepository} from './reaction.repository';
import {LanguageRepository} from './language.repository';
import {LanguagePhraseEntity} from './language-phrase.entity';
import {WordFilterRepository} from './word-filter.repository';
import {ArticleCommentEntity} from './article-comment.entity';
import {LanguagePhraseRepository} from './language-phrase.repository';
import {ArticleCommentRepository} from './article-comment.repository';
import {LanguagePhraseTranslationEntity} from './language-phrase-translation.entity';
import {LanguagePhraseTranslationRepository} from './language-phrase-translation.repository';

export const databaseEntities = [
  ArticleEntity,
  RankEntity,
  SessionEntity,
  UserEntity,
  ArticleCommentEntity,
  ConfigEntity,
  BanEntity,
  WordFilterEntity,
  ChatlogEntity,
  RoomEntity,
  GroupEntity,
  PhotoEntity,
  LanguageEntity,
  LanguagePhraseEntity,
  LanguagePhraseTranslationEntity,
  CommentEntity,
  ReactionEntity,
];

export const databaseRepositories = [
  RankRepository,
  SessionRepository,
  UserRepository,
  ArticleRepository,
  ArticleCommentRepository,
  ConfigRepository,
  BanRepository,
  WordFilterRepository,
  ChatlogRepository,
  RoomRepository,
  GroupRepository,
  PhotoRepository,
  LanguageRepository,
  LanguagePhraseRepository,
  LanguagePhraseTranslationRepository,
  CommentRepository,
  ReactionRepository,
];
