import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';
import {UserFurnitureEntity} from './user-furniture.entity';

@Injectable()
export class UserFurnitureRepository extends BaseRepository<UserFurnitureEntity> {
  constructor(
    @InjectRepository(UserFurnitureEntity)
    userFurnitureRepo: Repository<UserFurnitureEntity>
  ) {
    super(userFurnitureRepo);
  }
}
