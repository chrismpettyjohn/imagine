import Bcrypt from 'bcryptjs';
import {Injectable} from '@nestjs/common';

@Injectable()
export class HashService {
  generate(raw: string): string {
    return Bcrypt.hashSync(raw);
  }

  compare(raw: string, hashed: string): boolean {
    return Bcrypt.compareSync(raw, hashed);
  }
}
