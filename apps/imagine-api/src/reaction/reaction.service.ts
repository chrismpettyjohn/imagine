import {FindOptionsWhere} from 'typeorm';
import {ReactionRepository} from '../database/reaction.repository';
import {ReactionEntity, ReactionType} from '../database/reaction.entity';

type ReactionExcludingResourceType = Omit<ReactionEntity, 'resourceType'>;

export class ReactionService {
  constructor(
    private readonly resourceType: string,
    private readonly ReactionRepo: ReactionRepository
  ) {}

  findMany(
    filter: FindOptionsWhere<ReactionEntity>
  ): Promise<ReactionEntity[]> {
    return this.ReactionRepo.find({
      where: {
        ...filter,
        resourceType: this.resourceType,
      },
    });
  }

  create(newReaction: ReactionExcludingResourceType): Promise<ReactionEntity> {
    return this.ReactionRepo.create({
      ...newReaction,
      resourceType: this.resourceType,
    });
  }

  async update(id: number, reaction: ReactionType): Promise<void> {
    await this.ReactionRepo.update({id}, {reaction});
  }

  async delete(id: number): Promise<void> {
    await this.ReactionRepo.delete({id});
  }
}
