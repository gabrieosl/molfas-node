import Sequelize, { Model } from 'sequelize';

class Supplier extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Rawmaterial, {
      through: 'supplyings',
      as: 'rawmaterials',
      foreignKey: 'supplier_id',
      otherKey: 'rawmaterial_id',
    });
  }
}

export default Supplier;
