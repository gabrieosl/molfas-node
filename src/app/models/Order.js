import Sequelize, { Model } from 'sequelize';
import Orderitem from './Orderitem';

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        accepted_at: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
        manufactured_at: Sequelize.DATE,
        paid_at: Sequelize.DATE,
        payment_due: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Customer, {
      foreignKey: 'customer_id',
      as: 'customer',
    });
    this.belongsToMany(models.Product, {
      through: Orderitem,
      as: 'products',
      foreignKey: 'order_id',
      otherKey: 'product_id',
    });
  }
}
export default Order;
