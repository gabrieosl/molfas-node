import Sequelize from 'sequelize';

import AdminModels from '../../modules/admin/models';
import StoreModels from '../../modules/store/models';

import databaseConfig from '../config/database';

const models = [].concat(AdminModels).concat(StoreModels);

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
