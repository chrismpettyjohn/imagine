import {UserEntity} from './user.entity';
import {ArticleEntity} from './article.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('imagine_article_comments')
export class ArticleCommentEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'article_id'})
  articleID!: number;

  @ManyToOne(() => ArticleEntity, article => article.comments)
  @JoinColumn({name: 'article_id'})
  article?: ArticleEntity;

  @Column({name: 'user_id'})
  userID!: number;

  @ManyToOne(() => UserEntity, user => user.articles)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @Column()
  comment!: string;

  @CreateDateColumn({name: 'created_at'})
  createdAt?: string;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt?: string;
}
