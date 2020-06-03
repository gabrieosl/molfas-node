import Order from '../../models/Order';
import Product from '../../models/Product';

class OrderController {
  async store(req, res) {
    const { customerId } = req;

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
    const { customerId } = req;

    const { orderId } = req.params;
    if (orderId) {
      const order = await Order.findByPk(orderId, {
        where: { customer_id: customerId },
      });
      return res.json(order);
    }
    const orders = await Order.findAll({ where: { customer_id: customerId } });
    console.log(orders);
    return res.json(orders);
  }
}

export default new OrderController();
