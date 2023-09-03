import {In} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {ChatlogEntity} from '../database/chatlog.entity';
import {ChatlogRepository} from '../database/chatlog.repository';
import {BaseDataloaderService} from '../utility/base.dataloader';

@Injectable()
export class ChatlogDataloaderService extends BaseDataloaderService<ChatlogEntity> {
  constructor(private readonly chatlogRepo: ChatlogRepository) {
    super(async (ids: number[]) => {
      if (ids.length === 0) {
        return [];
      }

      return this.chatlogRepo._find({
        id: In(ids),
      });
    });
  }
}
