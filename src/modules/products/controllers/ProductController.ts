import { Request, Response } from 'express';

import AppError from '@shared/errors/AppError';
import ProductsRepository from '../repositories/ProductsRepository';

class ProductController {
  async index(request: Request, response: Response): Promise<Response> {
    const repository = new ProductsRepository();
    const items = await repository.find();
    return response.json(items);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const repository = new ProductsRepository();
    const title = decodeURIComponent(request.params.title);
    const item = await repository.findByTitle(title);
    if (!item) throw new AppError('product not found', 404);
    return response.json(item);
  }
}

export default new ProductController();
