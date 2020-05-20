import Sequelize from 'sequelize';

import Customer from '../app/models/Customer';
import Address from '../app/models/Address';
import Order from '../app/models/Order';
import Product from '../app/models/Product';
import Subproduct from '../app/models/Subproduct';
import Orderitem from '../app/models/Orderitem';
import Rawmaterial from '../app/models/Rawmaterial';
import Supplier from '../app/models/Supplier';
import Mold from '../app/models/Mold';
import Machine from '../app/models/Machine';
import Productimage from '../app/models/Productimage';
import User from '../app/models/User';
import Avatar from '../app/models/Avatar';

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
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
