import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('imagine_languages')
export class LanguageEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({type: 'tinyint'})
  hidden!: number;

  @Column()
  language!: string;

  @Column({name: 'flag_url'})
  flagURL!: string;

  @Column({name: 'created_at', type: 'timestamp'})
  createdAt!: string;
}
