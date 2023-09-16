import {SessionEntity} from './session.entity';
import {registerEnumType} from '@nestjs/graphql';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {
  IMAGINE_DEFAULT_ACTIVITY_POINTS,
  IMAGINE_DEFAULT_CREDITS,
  IMAGINE_DEFAULT_HOME_ROOM,
  IMAGINE_DEFAULT_LOOK,
  IMAGINE_DEFAULT_MOTTO,
  IMAGINE_DEFAULT_VIP_POINTS,
} from '../imagine.constant';
import {UserWire, UserGender, UserOnlineStatus} from '@imagine-cms/types';

registerEnumType(UserGender, {
  name: 'UserGender',
});

registerEnumType(UserOnlineStatus, {
  name: 'UserOnlineStatus',
});

@Entity('users')
export class UserEntity implements UserWire {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({unique: true})
  username!: string;

  @Column()
  password!: string;

  @Column({name: 'mail'})
  email!: string;

  @Column({name: 'auth_ticket'})
  gameSSO!: string;

  @Column({name: 'rank', type: 'int'})
  rankID: number = 1;

  @Column()
  credits: number = IMAGINE_DEFAULT_CREDITS;

  @Column({name: 'points'})
  vipPoints: number = IMAGINE_DEFAULT_VIP_POINTS;

  @Column({name: 'pixels'})
  activityPoints: number = IMAGINE_DEFAULT_ACTIVITY_POINTS;

  @Column()
  look: string = IMAGINE_DEFAULT_LOOK;

  @Column({type: 'int'})
  gender!: UserGender;

  @Column()
  motto: string = IMAGINE_DEFAULT_MOTTO;

  @Column({name: 'account_created'})
  accountCreatedAt!: number;

  @Column({name: 'online', type: 'int'})
  onlineStatus: UserOnlineStatus = UserOnlineStatus.Offline;

  @Column({name: 'ip_current'})
  ipLast!: string;

  @Column({name: 'ip_register'})
  ipRegistered!: string;

  @Column({name: 'machine_id'})
  machineAddress!: string;

  @Column({name: 'home_room'})
  homeRoomID: number = IMAGINE_DEFAULT_HOME_ROOM;

  @Column({name: 'google_id', type: 'varchar', nullable: true})
  googleID?: string;

  @Column({name: 'fb_id', type: 'varchar', nullable: true})
  facebookID?: string;

  @Column({name: 'discord_id', type: 'varchar', nullable: true})
  discordID?: string;

  @OneToMany(() => SessionEntity, session => session.user)
  sessions?: SessionEntity[];
}
