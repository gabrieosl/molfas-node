import Sequelize, { Model } from 'sequelize';

class Mold extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        type: Sequelize.STRING,
        active: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Subproduct, {
      as: 'subproducts',
      foreignKey: 'mold_id',
    });
  }
}

export default Mold;
