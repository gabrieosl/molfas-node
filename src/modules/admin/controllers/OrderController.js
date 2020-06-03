import Order from '../../models/Order';
import Product from '../../models/Product';

class OrderController {
  async store(req, res) {
    const { customerId } = req.params;

    const created = await Order.create({ customer_id: customerId });

    req.body.map(async item => {
      const product = await Product.findByPk(item.id);
      await created.addProduct(product, {
        through: { price: product.price, quantity: item.amount },
      });
      // created.addProduct(parseInt(item.id, 10), {
      // })
    });

    return res.status(201).json(created);
  }

  async index(req, res) {
    const { id } = req.params;
    if (id) {
      const order = await Order.findByPk(id, { include: ['products'] });
      return res.json(order);
    }
    const orders = await Order.findAll({
      include: ['products', 'customer'],
      order: [['created_at', 'DESC']],
    });
    return res.json(orders);
  }

  async update(req, res) {
    const { id } = req.params;
    const item = await Order.findByPk(id);
    const itemUpdated = await item.update(req.body);

    return res.json(itemUpdated);
  }
}

export default new OrderController();
