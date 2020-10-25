import { Request, Response } from 'express';

import AppError from '@shared/errors/AppError';
import AdminProductsRepository from '../repositories/AdminProductsRepository';

class AdminDefaultProductImageController {
  async store(request: Request, response: Response): Promise<Response> {
    const repository = new AdminProductsRepository();
    const { id, targetId } = request.params;

    const product = await repository.findById(id);
    if (!product) throw new AppError('product not found', 404);

    const image = product.images.find(img => img.id === targetId);
    if (!image) throw new AppError('image not found', 400);

    product.images = product.images.map(img => ({
      ...img,
      isDefault: img.id === image.id,
    }));

    await repository.save(product);

    return response.json({ message: 'success' });
  }
}

export default new AdminDefaultProductImageController();
