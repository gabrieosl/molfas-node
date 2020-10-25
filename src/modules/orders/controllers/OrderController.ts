import { Request, Response } from 'express';

import AppError from '@shared/errors/AppError';
import OrdersRepository from '../repositories/OrdersRepository';
import ProductsRepository from '@modules/products/repositories/ProductsRepository';

interface IOrderItem {
  id: string;
  quantity: number;
}

class OrderController {
  async store(request: Request, response: Response): Promise<Response> {
    const repository = new OrdersRepository();
    const productsRepository = new ProductsRepository();
    const { id: userId, isStaff } = request.user;
    const items = request.body.items as IOrderItem[];

    // validating items
    const parsedItems = await Promise.all(
      items.map(async item => {
        const product = await productsRepository.findById(item.id);
        if (!product) throw new AppError('invalid product id', 400);
        return {
          id: product.id.toHexString(),
          quantity: item.quantity,
          price: product.price,
        };
      }),
    );

    const total = parsedItems.reduce(
      (all, current) => all + current.quantity * current.price,
      0,
    );
    const order = {
      items: parsedItems,
      total,
      acceptedAt: isStaff ? new Date() : undefined,
      userId,
    };

    const created = await repository.create(order);

    return response.status(201).json(created);
  }

  async index(request: Request, response: Response): Promise<Response> {
    const repository = new OrdersRepository();
    const { id: userId } = request.user;

    const orders = await repository.findByUser(userId);

    return response.json(orders);
  }
}

export default new OrderController();
