module.exports = {
  up: queryInterface => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      'rawmaterials',
      [
        {
          id: 1,
          name: 'PP',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: 'DD',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: 'Borracha',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          name: 'JJ',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          name: 'Gancho de ferro',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('rawmaterials', null, {});
  },
};
