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

  @Column({name: 'discord_url'})
  discordURL!: string;

  @Column({name: 'twitter_url'})
  twitterURL!: string;

  @Column({name: 'facebook_url'})
  facebookURL!: string;
}
