import {UserEntity} from './user.entity';
import {ArticleWire} from '@imagine-cms/types';
import {ArticleCommentEntity} from './article-comment.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('imagine_articles')
export class ArticleEntity implements ArticleWire {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({name: 'user_id'})
  userID!: number;

  @ManyToOne(() => UserEntity, user => user.articles)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  content!: string;

  @Column({name: 'image_url'})
  imageURL!: string;

  @CreateDateColumn({name: 'created_at'})
  createdAt?: string;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt?: string;

  @OneToMany(() => ArticleCommentEntity, articleComment => articleComment.article)
  comments?: ArticleCommentEntity[];
}
