import Product from '../models/Product';

class ProductImageDefaultController {
  async store(req, res) {
    const { productId } = req.params;
    const imageId = Number(req.params.imageId);

    const product = await Product.findByPk(productId, {
      include: ['images'],
    });
    if (!product) {
      res.status(400).json({ error: 'Product not found' });
    }
    const newDefaultImage = product.images.find(
      (image) => image.id === imageId
    );
    if (newDefaultImage) {
      product.default_image_id = imageId;
      await product.save();

      const { id, name, default_image_id } = product;

      return res.status(200).json({ id, name, default_image_id });
    }
    return res.status(400).json({
      error: `Product id ${product.id} does not have a picture id ${imageId}`,
    });
  }
}

export default new ProductImageDefaultController();
