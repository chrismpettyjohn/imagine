import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

export interface StorePackageBenefits {
  credits: number;
  pixels: number;
  points: number;
  rankID: number;
  itemIDs: number[];
  badgeCodes: string[];
}

@Entity('imagine_store_packages')
export class StorePackageEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title!: string;

  @Column({type: 'text'})
  description!: string;

  @Column({type: 'longtext'})
  content!: string;

  @Column({name: 'image_url'})
  imageURL!: string;

  @Column({name: 'is_recurring'})
  isRecurring!: 1 | 0;

  @Column({name: 'total_cost', type: 'decimal'})
  totalCost!: string;

  @Column()
  currency!: string;

  @Column({type: 'text'})
  benefits!: StorePackageBenefits;

  @Column({name: 'created_at', type: 'int'})
  createdAt!: number;

  @Column({name: 'updated_at', type: 'int'})
  updatedAt!: number;
}
