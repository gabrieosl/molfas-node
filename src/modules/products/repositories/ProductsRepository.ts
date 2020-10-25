import { getMongoRepository, MongoRepository, ObjectID } from 'typeorm';

import Product from '@modules/products/schemas/Product';

class ProductsRepository {
  protected ormRepository: MongoRepository<Product>;

  constructor() {
    this.ormRepository = getMongoRepository(Product);
  }

  public async find(): Promise<Product[] | undefined> {
    return this.ormRepository.find({ active: true });
  }

  public async findById(id: string): Promise<Product | undefined> {
    return this.ormRepository.findOne(id, { where: { active: true } });
  }

  public async findByTitle(title: string): Promise<Product | undefined> {
    return this.ormRepository.findOne({ title, active: true });
  }
}

export default ProductsRepository;
