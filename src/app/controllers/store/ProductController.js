import Product from '../../models/Product';

class ProductController {
  async index(req, res) {
    if (req.params.name) {
      const name = decodeURIComponent(req.params.name);
      const item = await Product.findOne({
        where: { name, active: true },
        include: ['subproducts', 'images', 'defaultImage'],
        order: [['name', 'ASC']],
      });
      return res.json(item);
    }

    const items = await Product.findAll({
      where: { active: true },
      include: ['subproducts', 'defaultImage'],
    });
    return res.json(items);
  }
}

export default new ProductController();
