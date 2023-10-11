import {Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('imagine_store_packages')
export class StorePackageEntity {
  @PrimaryGeneratedColumn()
  id?: number;
}
