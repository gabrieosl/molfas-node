import { getMongoRepository, MongoRepository, ObjectID } from 'typeorm';

import ICreateOrderDTO from '../dtos/ICreateOrderDTO';
import Order from '@modules/orders/schemas/Order';

class OrdersRepository {
  protected ormRepository: MongoRepository<Order>;

  constructor() {
    this.ormRepository = getMongoRepository(Order);
  }

  public async find(): Promise<Order[] | undefined> {
    return this.ormRepository.find();
  }

  public async findById(id: string): Promise<Order | undefined> {
    return this.ormRepository.findOne(id);
  }

  public async findByUser(userId: string): Promise<Order[] | undefined> {
    return this.ormRepository.find({ where: { userId } });
  }

  public async create(order: ICreateOrderDTO): Promise<Order> {
    const createdOrder = this.ormRepository.create(order);
    await this.ormRepository.save(createdOrder);

    return createdOrder;
  }

  public async save(order: Order): Promise<Order> {
    return this.ormRepository.save(order);
  }

  public async delete(id: string): Promise<void> {
    this.ormRepository.delete(id);
  }
}

export default OrdersRepository;
