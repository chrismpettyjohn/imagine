import {Injectable} from '@nestjs/common';

@Injectable()
export class DatabaseCleanupService {
  async perUserStatsCleanup() {}

  async performRoomsCleanup() {}

  async performUserFurnitureCleanup() {}
}
