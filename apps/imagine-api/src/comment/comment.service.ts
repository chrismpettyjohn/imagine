import {FindOptionsWhere} from 'typeorm';
import {CommentEntity} from '../database/comment.entity';
import {CommentRepository} from '../database/comment.repository';

type CommentExcludingResourceType = Omit<CommentEntity, 'resourceType'>;

export class CommentService {
  constructor(
    private readonly resourceType: string,
    private readonly commentRepo: CommentRepository
  ) {}

  findMany(filter: FindOptionsWhere<CommentEntity>): Promise<CommentEntity[]> {
    return this.commentRepo.find({
      where: {
        ...filter,
        resourceType: this.resourceType,
      },
    });
  }

  create(newComment: CommentExcludingResourceType): Promise<CommentEntity> {
    return this.commentRepo.create({
      ...newComment,
      resourceType: this.resourceType,
    });
  }

  async update(id: number, comment: string): Promise<void> {
    await this.commentRepo.update({id}, {comment});
  }

  async delete(id: number): Promise<void> {
    await this.commentRepo.delete({id});
  }
}
