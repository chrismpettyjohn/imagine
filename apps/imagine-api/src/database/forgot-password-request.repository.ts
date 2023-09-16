import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';
import {ForgotPasswordRequestEntity} from './forgot-password-request.entity';

@Injectable()
export class ForgotPasswordRequestRepository extends BaseRepository<ForgotPasswordRequestEntity> {
  constructor(
    @InjectRepository(ForgotPasswordRequestEntity)
    forgotPasswordRequestRepo: Repository<ForgotPasswordRequestEntity>
  ) {
    super(forgotPasswordRequestRepo);
  }
}
