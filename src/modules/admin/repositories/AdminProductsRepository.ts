import { getMongoRepository, MongoRepository } from 'typeorm';

import Product from '@modules/products/schemas/Product';
import ICreateProductDTO from '../dtos/ICreateProductDTO';

class ProductsRepository {
  protected ormRepository: MongoRepository<Product>;

  constructor() {
    this.ormRepository = getMongoRepository(Product);
  }

  public async find(): Promise<Product[] | undefined> {
    return this.ormRepository.find();
  }

  public async create(product: ICreateProductDTO): Promise<Product> {
    const createdProduct = this.ormRepository.create(product);
    await this.ormRepository.save(createdProduct);

    return createdProduct;
  }

  public async findById(id: string): Promise<Product | undefined> {
    return this.ormRepository.findOne(id);
  }

  public async save(product: Product): Promise<Product> {
    return this.ormRepository.save(product);
  }

  public async delete(id: string): Promise<void> {
    this.ormRepository.delete(id);
  }
}

export default ProductsRepository;
