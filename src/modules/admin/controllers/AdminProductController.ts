import { Request, Response } from 'express';

import AppError from '@shared/errors/AppError';
import AdminProductsRepository from '../repositories/AdminProductsRepository';

import isMongoIdValid from '@util/isMongoIdValid';

class AdminProductController {
  async store(request: Request, response: Response): Promise<Response> {
    const repository = new AdminProductsRepository();
    request.body.active = false;
    request.body.images = [];

    const created = await repository.create(request.body);

    return response.status(201).json(created);
  }

  async index(request: Request, response: Response): Promise<Response> {
    const repository = new AdminProductsRepository();

    const items = await repository.find();

    return response.json(items);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const repository = new AdminProductsRepository();
    const { id } = request.params;

    if (!isMongoIdValid(id)) throw new AppError('invalid product id', 400);

    const item = await repository.findById(id);

    return response.json(item);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const repository = new AdminProductsRepository();
    const { id } = request.params;
    const { title, description, price, active } = request.body;

    const item = await repository.findById(id);
    if (!item) throw new AppError('product not found', 404);

    item.title = title;
    item.description = description;
    item.price = price;
    item.active = title;

    const itemUpdated = await repository.save(item);

    return response.json(itemUpdated);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const repository = new AdminProductsRepository();
    const { id } = request.params;

    await repository.delete(id);

    return response.json({ message: 'success' });
  }
}

export default new AdminProductController();
