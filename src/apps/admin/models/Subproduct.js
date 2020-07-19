import Sequelize, { Model } from 'sequelize';

class Subproduct extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        piecesPerCicle: Sequelize.INTEGER,
        manufacturable: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Product, {
      through: 'recipes',
      as: 'products',
      foreignKey: 'subproduct_id',
      otherKey: 'product_id',
    });
    this.belongsTo(models.Mold, {
      as: 'mold',
      foreignKey: 'mold_id',
    });
  }
}

export default Subproduct;
