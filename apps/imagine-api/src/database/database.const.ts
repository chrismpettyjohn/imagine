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
import {UserBadgeEntity} from './user-badge.entity';
import {ConfigRepository} from './config.repository';
import {FriendshipEntity} from './friendship.entity';
import {WordFilterEntity} from './word-filter.entity';
import {SessionRepository} from './session.repository';
import {ArticleRepository} from './article.repository';
import {ChatlogRepository} from './chatlog.repository';
import {CommentRepository} from './comment.repository';
import {ReactionRepository} from './reaction.repository';
import {LanguageRepository} from './language.repository';
import {UserBadgeRepository} from './user-badge.repository';
import {SupportTicketEntity} from './support-ticket.entity';
import {FriendshipRepository} from './friendship.repository';
import {LanguagePhraseEntity} from './language-phrase.entity';
import {WordFilterRepository} from './word-filter.repository';
import {GroupMembershipEntity} from './group-membership.entity';
import {SupportTicketRepository} from './support-ticket.repository';
import {LanguagePhraseRepository} from './language-phrase.repository';
import {GroupMembershipRepository} from './group-membership.repository';
import {LanguagePhraseTranslationEntity} from './language-phrase-translation.entity';
import {LanguagePhraseTranslationRepository} from './language-phrase-translation.repository';
import {ForgotPasswordRequestEntity} from './forgot-password-request.entity';
import {ForgotPasswordRequestRepository} from './forgot-password-request.repository';
import {BetaCodeRepository} from './beta-code.repository';
import {BetaCodeEntity} from './beta-code.entity';
import {StaffApplicationRepository} from './staff-application.repository';
import {StaffApplicationEntity} from './staff-application.entity';
import {RoomEnterLogEntity} from './room-enter-log.entity';
import {RoomEnterLogRepository} from './room-enter-log.repository';
import {UserTradeLogEntity} from './user-trade-log.entity';
import {UserTradeLogRepository} from './user-trade-log.repository';
import {RadioRequestEntity} from './radio-request.entity';
import {RadioRequestRepository} from './radio-request.repository';
import {BugReportEntity} from './bug-report.entity';
import {BugReportRepository} from './bug-report.repository';
import {FurnitureEntity} from './furniture.entity';
import {FurnitureRepository} from './furniture.repository';
import {PinnedFurnitureRepository} from './pinned-furniture.repository';
import {PinnedFurnitureEntity} from './pinned-furniture.entity';
import {FurniturePurchaseLogRepository} from './furniture-purchase-log.repository';
import {FurniturePurchaseLogEntity} from './furniture-purchase-log.entity';
import {UserFurnitureEntity} from './user-furniture.entity';
import {UserFurnitureRepository} from './user-furniture.repository';
import {StorePackageRepository} from './store-package-repository';
import {StoreTransactionRepository} from './store-transaction.repository';
import {StoreTransactionLogRepository} from './store-transactions-log.repository';
import {StorePackageEntity} from './store-package.entity';
import {StoreTransactionEntity} from './store-transaction.entity';
import {StoreTransactionLogEntity} from './store-transactions-log.entity';
import {StoreCategoryEntity} from './store-category.entity';
import {StoreCategoryRepository} from './store-category.repository';

export const databaseEntities = [
  ArticleEntity,
  RankEntity,
  SessionEntity,
  UserEntity,
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
  FriendshipEntity,
  GroupMembershipEntity,
  UserBadgeEntity,
  SupportTicketEntity,
  ForgotPasswordRequestEntity,
  BetaCodeEntity,
  StaffApplicationEntity,
  RoomEnterLogEntity,
  UserTradeLogEntity,
  RadioRequestEntity,
  BugReportEntity,
  FurnitureEntity,
  PinnedFurnitureEntity,
  FurniturePurchaseLogEntity,
  UserFurnitureEntity,
  StorePackageEntity,
  StoreTransactionEntity,
  StoreTransactionLogEntity,
  StoreCategoryEntity,
];

export const databaseRepositories = [
  RankRepository,
  SessionRepository,
  UserRepository,
  ArticleRepository,
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
  FriendshipRepository,
  GroupMembershipRepository,
  UserBadgeRepository,
  SupportTicketRepository,
  ForgotPasswordRequestRepository,
  BetaCodeRepository,
  StaffApplicationRepository,
  RoomEnterLogRepository,
  UserTradeLogRepository,
  RadioRequestRepository,
  BugReportRepository,
  FurnitureRepository,
  PinnedFurnitureRepository,
  FurniturePurchaseLogRepository,
  UserFurnitureRepository,
  StorePackageRepository,
  StoreTransactionRepository,
  StoreTransactionLogRepository,
  StoreCategoryRepository,
];
