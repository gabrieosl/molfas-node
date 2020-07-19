import Sequelize, { Model } from 'sequelize';

class Orderitem extends Model {
  static init(sequelize) {
    super.init(
      {
        price: Sequelize.FLOAT,
        quantity: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Order, {
      foreignKey: 'order_id',
      as: 'order',
    });
    this.belongsTo(models.Product, {
      foreignKey: 'product_id',
      as: 'product',
    });
  }
}

export default Orderitem;
