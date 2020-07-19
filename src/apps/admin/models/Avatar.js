import Sequelize, { Model } from 'sequelize';

class Avatar extends Model {
  static init(sequelize) {
    super.init(
      {
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            if (this.path.startsWith('https://api.adorable')) {
              return this.path;
            }
            return `${process.env.APP_URL}/avatars/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}
export default Avatar;
