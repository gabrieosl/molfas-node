module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('subproducts', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pieces_per_cicle: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      mold_id: {
        type: Sequelize.INTEGER,
        references: { model: 'molds', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
      rawmaterial_id: {
        type: Sequelize.INTEGER,
        references: { model: 'rawmaterials', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      manufacturable: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('subproducts');
  },
};
