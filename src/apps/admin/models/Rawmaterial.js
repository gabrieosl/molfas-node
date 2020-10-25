import Sequelize, { Model } from 'sequelize';

class Rawmaterial extends Model {
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
    this.hasMany(models.Subproduct, {
      as: 'subproducts',
      foreignKey: 'rawmaterial_id',
    });
    this.belongsToMany(models.Supplier, {
      through: 'supplyings',
      as: 'suppliers',
      foreignKey: 'rawmaterial_id',
      otherKey: 'supplier_id',
    });
  }
}

export default Rawmaterial;
