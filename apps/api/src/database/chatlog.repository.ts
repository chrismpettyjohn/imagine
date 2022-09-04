import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {ChatlogEntity} from './chatlog.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';

@Injectable()
export class ChatlogRepository extends BaseRepository<ChatlogEntity> {
  constructor(@InjectRepository(ChatlogEntity) chatlogRepo: Repository<ChatlogEntity>) {
    super(chatlogRepo);
  }
}
