import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('imagine_config')
export class ConfigEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({name: 'site_name'})
  siteName!: string;

  @Column({name: 'logo_url'})
  logoURL!: string;

  @Column({name: 'nitro_url'})
  nitroURL!: string;

  @Column({name: 'badge_url'})
  badgeURL!: string;

  @Column({name: 'badge_ext'})
  badgeEXT!: string;

  @Column({name: 'group_badge_url'})
  groupBadgeURL!: string;

  @Column({name: 'discord_url'})
  discordURL!: string;

  @Column({name: 'discord_widget'})
  discordWidget!: string;

  @Column({name: 'twitter_url'})
  twitterURL!: string;

  @Column({name: 'facebook_url'})
  facebookURL!: string;

  @Column({name: 'instagram_url'})
  instagramURL!: string;

  @Column({name: 'snapchat_url'})
  snapchatURL!: string;

  @Column({name: 'date_format'})
  dateFormat!: string;
}
