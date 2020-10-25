import Product from '../models/Product';
import Productimage from '../models/Productimage';
import SubProduct from '../models/Subproduct';

class ProductController {
  async store(req, res) {
    // Default values
    req.body.category_id = null;
    req.body.active = false;

    const created = await Product.create(req.body);

    return res.status(201).json(created);
  }

  async index(req, res) {
    const items = await Product.findAll({
      attributes: ['id', 'name', 'description', 'price', 'active'],
      include: [
        {
          model: Productimage,
          as: 'defaultImage',
          attributes: ['path', 'url'],
          required: false,
        },
        {
          model: SubProduct,
          as: 'subproducts',
          attributes: ['name', 'piecesPerCicle', 'manufacturable'],
          through: {
            attributes: [],
          },
        },
      ],
      order: [
        ['active', 'DESC'],
        ['name', 'ASC'],
      ],
    });
    return res.json(items);
  }

  async update(req, res) {
    const { id } = req.params;

    const item = await Product.findOne({
      where: { id },
      include: ['subproducts'],
    });

    /* Only allow activation of products when having at least one subpart */
    if (!item.active && req.body.active && !item.subproducts.length) {
      return res.status(403).json({
        message: 'Impossible to activate item without sub-products.',
      });
    }

    const itemUpdated = await item.update(req.body);

    return res.json(itemUpdated);
  }

  async delete(req, res) {
    const { id } = req.params;

    await Product.destroy({
      where: { id },
    });
    return res.json({ message: 'success' });
  }
}

export default new ProductController();
