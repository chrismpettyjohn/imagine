import {
  FindOptionsWhere,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';

export abstract class BaseRepository<Entity> {
  constructor(
    // @ts-ignore
    readonly repo: Repository<Entity>
  ) {}

  async create(newEntity: Omit<Entity, 'id'>): Promise<Entity> {
    const newObject = await this.repo.save(newEntity as any);

    // @ts-ignore
    if (!newObject.id) {
      throw new Error('Entity missing `id`');
    }

    // @ts-ignore It's expected for entities to have an `id`
    return this.findOneOrFail({id: newObject.id!});
  }

  _find(
    where?: FindOptionsWhere<Entity>,
    options?: FindManyOptions<Entity>
  ): Promise<Entity[]> {
    return this.repo.find({
      where,
      ...options,
    });
  }

  find(opts: FindManyOptions<Entity>): Promise<Entity[]> {
    return this.repo.find(opts);
  }

  _findOne(
    where?: FindOptionsWhere<Entity>,
    options?: FindOneOptions<Entity>
  ): Promise<Entity | null> {
    return this.repo.findOne({
      where,
      ...options,
    });
  }

  findOne(options?: FindOneOptions<Entity>): Promise<Entity | null> {
    return this.repo.findOne({...options});
  }

  findOneOrFail(
    where?: FindOptionsWhere<Entity>,
    options?: FindOneOptions<Entity>
  ): Promise<Entity> {
    return this.repo.findOneOrFail({
      where,
      ...options,
    });
  }

  async update(
    conditions: FindOptionsWhere<Entity>,
    changes: Partial<Entity>
  ): Promise<void> {
    await this.repo.update(conditions, changes as any);
  }

  async delete(conditions: FindOptionsWhere<Entity>): Promise<void> {
    await this.repo.delete(conditions);
  }

  // @ts-ignore
  getInstance(): Repository<Entity> {
    return this.repo;
  }
}
