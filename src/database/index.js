import Sequelize from 'sequelize';

import Customer from '../apps/store/models/Customer';
import Address from '../apps/store/models/Address';
import Order from '../apps/admin/models/Order';
import Product from '../apps/admin/models/Product';
import Subproduct from '../apps/admin/models/Subproduct';
import Orderitem from '../apps/admin/models/Orderitem';
import Rawmaterial from '../apps/admin/models/Rawmaterial';
import Supplier from '../apps/admin/models/Supplier';
import Mold from '../apps/admin/models/Mold';
import Machine from '../apps/admin/models/Machine';
import Productimage from '../apps/admin/models/Productimage';
import User from '../apps/admin/models/User';
import Avatar from '../apps/admin/models/Avatar';

import databaseConfig from '../config/database';

const models = [
  Customer,
  Address,
  Order,
  Product,
  Orderitem,
  Subproduct,
  Rawmaterial,
  Supplier,
  Mold,
  Machine,
  Productimage,
  User,
  Avatar,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
