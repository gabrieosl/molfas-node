import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        price: Sequelize.FLOAT,
        active: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    // this.addHook('beforeSave', async product => {
    //   if (!product.avatar_id) {
    //     product.avatar_id = 1;
    //   }
    // });

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Order, {
      through: 'orderitems',
      as: 'orders',
      foreignKey: 'product_id',
      otherKey: 'order_id',
    });
    this.belongsToMany(models.Subproduct, {
      through: 'recipes',
      as: 'subproducts',
      foreignKey: 'product_id',
      otherKey: 'subproduct_id',
    });
    this.hasMany(models.Orderitem, {
      as: 'orderitems',
      foreignKey: 'product_id',
    });
    this.hasMany(models.Productimage, {
      as: 'images',
      foreignKey: 'product_id',
    });
    this.belongsTo(models.Productimage, {
      as: 'defaultImage',
      foreignKey: 'default_image_id',
    });
  }
}

export default Product;
