import Dataloader from 'dataloader';

export class BaseDataloaderService<Model> {
  constructor(private readonly loadBatch: (ids: number[]) => Promise<Model[]>) {}

  // @ts-ignore
  private readonly dataLoader = new Dataloader(this.loadBatch);

  loadById = async (id: number): Promise<Model> => {
    return this.dataLoader.load(id) as any;
  };

  loadManyById = async (ids: number[]): Promise<Model[]> => {
    if (ids.length === 0) {
      return [];
    }

    return this.dataLoader.loadMany(ids) as any;
  };
}
