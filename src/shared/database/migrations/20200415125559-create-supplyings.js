module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('supplyings', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      rawmaterial_id: {
        type: Sequelize.INTEGER,
        references: { model: 'rawmaterials', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
      supplier_id: {
        type: Sequelize.INTEGER,
        references: { model: 'suppliers', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('supplyings');
  },
};
