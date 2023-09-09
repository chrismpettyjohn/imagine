import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {FriendshipEntity} from './friendship.entity';
import {BaseRepository} from '../utility/base.repository';

@Injectable()
export class FriendshipRepository extends BaseRepository<FriendshipEntity> {
  constructor(
    @InjectRepository(FriendshipEntity)
    friendshipRepo: Repository<FriendshipEntity>
  ) {
    super(friendshipRepo);
  }
}
