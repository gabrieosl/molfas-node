import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Customer extends Model {
  static init(sequelize) {
    super.init(
      {
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        document: Sequelize.STRING,
        active: Sequelize.BOOLEAN,
        priority: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async customer => {
      if (customer.password) {
        customer.password_hash = await bcrypt.hash(customer.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Address, {
      as: 'addresses',
      foreignKey: 'customer_id',
    });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}
export default Customer;
