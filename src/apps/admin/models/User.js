import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

import Avatar from './Avatar';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        username: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        role: Sequelize.STRING,
        active: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
      if (!user.avatar_id) {
        const random = Math.floor(Math.random() * 100000);
        const avatar = await Avatar.create({
          path: `https://api.adorable.io/avatars/200/${random}.png`,
        });
        if (avatar) {
          user.avatar_id = avatar.id;
        }
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Avatar, {
      foreignKey: 'avatar_id',
      as: 'avatar',
    });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
