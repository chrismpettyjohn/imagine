import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';
import {SupportTicketEntity} from './support-ticket.entity';

@Injectable()
export class SupportTicketRepository extends BaseRepository<SupportTicketEntity> {
  constructor(
    @InjectRepository(SupportTicketEntity)
    supportTicketRepo: Repository<SupportTicketEntity>
  ) {
    super(supportTicketRepo);
  }
}
