import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('imagine_store_categories')
export class StoreCategoryEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title!: string;

  @Column({name: 'created_at', type: 'int'})
  createdAt!: number;
}
