import { In } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { SessionEntity } from '../database/session.entity';
import { SessionRepository } from '../database/session.repository';
import { BaseDataloaderService } from '../utility/base.dataloader';

@Injectable()
export class SessionDataloaderService extends BaseDataloaderService<SessionEntity> {
  constructor(private readonly sessionRepo: SessionRepository) {
    super(async (ids: number[]) => {
      if (ids.length === 0) {
        return [];
      }

      return this.sessionRepo._find({
        id: In(ids),
      });
    });
  }
}
