import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('imagine_comments')
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id', type: 'int'})
  userID!: number;

  @Column({name: 'resource_id', type: 'int'})
  resourceID!: number;

  @Column({name: 'resource_type', type: 'varchar'})
  resourceType!: string;

  @Column({type: 'text'})
  comment!: string;

  @CreateDateColumn({name: 'created_at', type: 'datetime'})
  createdAt?: number;

  @UpdateDateColumn({name: 'updated_at', type: 'datetime'})
  updatedAt?: number;
}
