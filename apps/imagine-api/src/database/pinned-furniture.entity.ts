import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('imagine_pinned_furniture')
export class PinnedFurnitureEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id', type: 'int'})
  userID!: number;

  @Column({name: 'furniture_id', type: 'int'})
  furnitureID!: number;

  @Column({name: 'created_at', type: 'int'})
  createdAt!: number;

  @Column({name: 'updated_at', type: 'int'})
  updatedAt!: number;
}
