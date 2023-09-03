import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum ReactionType {
  Like = 1,
  Dislike = 2,
}

@Entity('imagine_reactions')
export class ReactionEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id', type: 'int'})
  userID!: number;

  @Column({name: 'resource_id', type: 'int'})
  resourceID!: number;

  @Column({name: 'resource_type', type: 'varchar'})
  resourceType!: string;

  @Column({type: 'tinyint'})
  reaction!: ReactionType;

  @CreateDateColumn({name: 'created_at', type: 'datetime'})
  createdAt?: number;

  @UpdateDateColumn({name: 'updated_at', type: 'datetime'})
  updatedAt?: number;
}
