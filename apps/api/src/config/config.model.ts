import {ConfigWire} from '@imagine-cms/types';
import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class ConfigModel implements ConfigWire {
  @Field({nullable: true})
  siteName?: string;

  @Field({nullable: true})
  logoURL?: string;

  @Field({nullable: true})
  nitroURL?: string;

  @Field({nullable: true})
  discordURL?: string;

  @Field({nullable: true})
  discordWidget?: string;

  @Field({nullable: true})
  facebookURL?: string;

  @Field({nullable: true})
  instagramURL?: string;

  @Field({nullable: true})
  twitterURL?: string;

  @Field({nullable: true})
  snapchatURL?: string;

  @Field({nullable: true})
  dateFormat?: string;
}
