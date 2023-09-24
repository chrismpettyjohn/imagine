import {ConfigWire} from '@imagine-cms/types';
import {Field, ObjectType} from '@nestjs/graphql';
import {ConfigEntity} from '../database/config.entity';

@ObjectType()
export class ConfigModel implements ConfigWire {
  @Field({nullable: true})
  siteName!: string;

  @Field({nullable: true})
  logoURL!: string;

  @Field({nullable: true})
  nitroURL!: string;

  @Field({nullable: true})
  badgeURL!: string;

  @Field({nullable: true})
  badgeEXT!: string;

  @Field({nullable: true})
  figureURL!: string;

  @Field({nullable: true})
  groupBadgeURL!: string;

  @Field({nullable: true})
  discordURL!: string;

  @Field({nullable: true})
  discordWidget!: string;

  @Field({nullable: true})
  facebookURL!: string;

  @Field({nullable: true})
  instagramURL!: string;

  @Field({nullable: true})
  twitterURL!: string;

  @Field({nullable: true})
  snapchatURL!: string;

  @Field({nullable: true})
  dateFormat!: string;

  @Field({nullable: true})
  softwareVersion!: string;

  @Field({nullable: true})
  defaultLanguage!: string;

  @Field(() => [String!], {nullable: true})
  allowedLanguages!: string[];

  @Field(() => Boolean, {nullable: true})
  betaCodesRequired!: boolean;

  static fromEntity(
    entity: ConfigEntity,
    softwareVersion: string
  ): ConfigModel {
    return {
      softwareVersion,
      siteName: entity.siteName,
      logoURL: entity.logoURL,
      nitroURL: entity.nitroURL,
      badgeURL: entity.badgeURL,
      badgeEXT: entity.badgeEXT,
      figureURL: entity.figureURL,
      groupBadgeURL: entity.groupBadgeURL,
      discordURL: entity.discordURL,
      discordWidget: entity.discordWidget,
      facebookURL: entity.facebookURL,
      instagramURL: entity.instagramURL,
      twitterURL: entity.twitterURL,
      snapchatURL: entity.snapchatURL,
      dateFormat: entity.dateFormat,
      defaultLanguage: entity.defaultLanguage,
      allowedLanguages: JSON.parse(entity.allowedLanguages),
      betaCodesRequired: entity.betaCodesRequired === 1,
    };
  }
}
