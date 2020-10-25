import { Request, Response } from 'express';
import { unlinkSync } from 'fs';
import { resolve } from 'path';
import { ObjectID } from 'mongodb';

import AppError from '@shared/errors/AppError';
import AdminProductsRepository from '../repositories/AdminProductsRepository';

class AdminProductImageController {
  async store(request: Request, response: Response) {
    const repository = new AdminProductsRepository();
    const { id } = request.params;
    const { filename } = request.file;

    const product = await repository.findById(id);
    if (!product) throw new AppError('product not found', 404);

    product.images.push({
      id: new ObjectID().toHexString(),
      filename,
      isDefault: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await repository.save(product);
    return response.status(201).send();
  }

  async index(request: Request, response: Response) {
    const repository = new AdminProductsRepository();
    const { id } = request.params;

    const product = await repository.findById(id);
    if (!product) throw new AppError('product not found', 404);

    return response.json(product.images);
  }

  async delete(request: Request, response: Response) {
    const repository = new AdminProductsRepository();
    const { id, targetId } = request.params;

    const product = await repository.findById(id);
    if (!product) throw new AppError('product not found', 404);

    const image = product.images.find(img => img.id === targetId);
    if (!image) throw new AppError('image not found', 400);

    const filename = resolve(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      'tmp',
      image.filename,
    );

    unlinkSync(filename);

    product.images = product.images.filter(img => img.id !== targetId);

    await repository.save(product);

    return response.json({ message: 'success' });
  }
}

export default new AdminProductImageController();
