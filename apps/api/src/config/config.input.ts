import {Field, InputType} from '@nestjs/graphql';
import {ConfigUpdateInputDTO} from '@imagine-cms/types';
import {MaxLength, IsAlphanumeric, IsOptional, IsUrl} from 'class-validator';

@InputType()
export class ConfigUpdateInput implements ConfigUpdateInputDTO {
  @Field()
  @MaxLength(10)
  @IsAlphanumeric()
  @IsOptional()
  siteName?: string;

  @Field()
  @IsUrl()
  @IsOptional()
  logoURL?: string;

  @Field()
  @IsUrl()
  @IsOptional()
  nitroURL?: string;

  @Field()
  @IsUrl()
  @IsOptional()
  discordURL?: string;

  @Field()
  @IsUrl()
  @IsOptional()
  facebookURL?: string;

  @Field()
  @IsUrl()
  @IsOptional()
  twitterURL?: string;
}
