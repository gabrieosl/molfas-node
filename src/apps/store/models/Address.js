import Sequelize, { Model } from 'sequelize';

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        street: Sequelize.STRING,
        number: Sequelize.STRING,
        neighborhood: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        zip: Sequelize.STRING,
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
  }
}

export default Address;
