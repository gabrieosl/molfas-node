module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('products', 'default_image_id', {
      type: Sequelize.INTEGER,
      references: { model: 'productimages', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: queryInterface => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.removeColumn('products', 'default_image_id');
  },
};
