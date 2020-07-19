import { unlinkSync } from 'fs';
import { resolve } from 'path';
import ProductImage from '../models/Productimage';

class ProductImageController {
  async store(req, res) {
    const { productId } = req.params;
    const { filename: path } = req.file;

    await ProductImage.create({
      product_id: productId,
      path,
    });

    return res.status(201).send();
  }

  async index(req, res) {
    const { productId } = req.params;

    const images = await ProductImage.findAll({
      where: { product_id: productId },
    });

    return res.json(images);
  }

  async delete(req, res) {
    const { targetId } = req.params;

    const image = await ProductImage.findOne({
      where: { id: targetId },
    });
    console.log(image);

    const filename = resolve(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      'media',
      'avatars',
      image.path
    );

    unlinkSync(filename);

    await ProductImage.destroy({
      where: { id: targetId },
    });
    return res.json({ message: 'success' });
  }
}

export default new ProductImageController();
