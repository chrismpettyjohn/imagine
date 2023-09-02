import {LanguagePhraseType} from '@imagine-cms/types';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('imagine_language_phrases')
export class LanguagePhraseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({unique: true})
  key!: string;

  @Column({type: 'varchar'})
  type!: LanguagePhraseType;

  @Column({type: 'text'})
  description!: string;

  @Column({name: 'created_at', type: 'timestamp'})
  createdAt!: string;
}
