import {Field, InputType} from '@nestjs/graphql';
import {ConfigEntity} from '../database/config.entity';
import {ConfigUpdateInputDTO} from '@imagine-cms/types';
import {IsAlphanumeric, IsOptional, IsString, IsUrl} from 'class-validator';

@InputType()
export class ConfigUpdateInput implements ConfigUpdateInputDTO {
  @Field({nullable: true})
  @IsAlphanumeric()
  @IsOptional()
  siteName?: string;

  @Field({nullable: true})
  @IsUrl()
  @IsOptional()
  logoURL?: string;

  @Field({nullable: true})
  @IsUrl()
  @IsOptional()
  nitroURL?: string;

  @Field({nullable: true})
  @IsUrl()
  @IsOptional()
  badgeURL?: string;

  @Field({nullable: true})
  @IsString()
  @IsOptional()
  badgeEXT?: string;

  @Field({nullable: true})
  @IsUrl()
  @IsOptional()
  figureURL?: string;

  @Field({nullable: true})
  @IsUrl()
  @IsOptional()
  groupBadgeURL?: string;

  @Field({nullable: true})
  @IsUrl()
  @IsOptional()
  discordURL?: string;

  @Field({nullable: true})
  @IsOptional()
  discordWidget?: string;

  @Field({nullable: true})
  @IsUrl()
  @IsOptional()
  facebookURL?: string;

  @Field({nullable: true})
  @IsUrl()
  @IsOptional()
  instagramURL?: string;

  @Field({nullable: true})
  @IsUrl()
  @IsOptional()
  twitterURL?: string;

  @Field({nullable: true})
  @IsUrl()
  @IsOptional()
  snapchatURL?: string;

  @Field({nullable: true})
  @IsOptional()
  dateFormat?: string;

  @Field({nullable: true})
  defaultLanguage?: string;

  @Field(() => [String!], {nullable: true})
  allowedLanguages?: string[];

  static toEntity(model: ConfigUpdateInput): Partial<ConfigEntity> {
    return {
      siteName: model?.siteName && model.siteName,
      logoURL: model?.logoURL && model.logoURL,
      nitroURL: model?.nitroURL && model.nitroURL,
      badgeURL: model?.badgeURL && model.badgeURL,
      badgeEXT: model?.badgeEXT && model.badgeEXT,
      figureURL: model?.figureURL && model.figureURL,
      groupBadgeURL: model?.groupBadgeURL && model.groupBadgeURL,
      discordURL: model?.discordURL && model.discordURL,
      discordWidget: model?.discordWidget && model.discordWidget,
      facebookURL: model?.facebookURL && model.facebookURL,
      instagramURL: model?.instagramURL && model.instagramURL,
      twitterURL: model?.twitterURL && model.twitterURL,
      snapchatURL: model?.snapchatURL && model.snapchatURL,
      dateFormat: model?.dateFormat && model.dateFormat,
      defaultLanguage: model?.defaultLanguage && model.defaultLanguage,
      allowedLanguages:
        model?.allowedLanguages && JSON.stringify(model.allowedLanguages),
    };
  }
}
