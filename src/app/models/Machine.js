import Sequelize, { Model } from 'sequelize';

class Machine extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        slot: Sequelize.STRING,
        active: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Machine;
