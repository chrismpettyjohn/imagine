import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('imagine_language_phrase_translations')
export class LanguagePhraseTranslationEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'language_id'})
  languageID!: number;

  @Column({name: 'language_phrase_id'})
  languagePhraseID!: number;

  @Column()
  translation!: string;

  @Column({name: 'created_at', type: 'timestamp'})
  createdAt!: string;

  @Column({name: 'updated_at', type: 'timestamp'})
  updatedAt!: string;
}
