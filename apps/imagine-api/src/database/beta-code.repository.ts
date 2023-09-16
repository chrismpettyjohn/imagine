import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BetaCodeEntity} from './beta-code.entity';
import {BaseRepository} from '../utility/base.repository';

@Injectable()
export class BetaCodeRepository extends BaseRepository<BetaCodeEntity> {
  constructor(
    @InjectRepository(BetaCodeEntity) betaCodeRepo: Repository<BetaCodeEntity>
  ) {
    super(betaCodeRepo);
  }
}
