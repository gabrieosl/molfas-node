module.exports = {
  up: queryInterface => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      'subproducts',
      [
        {
          id: 1,
          name: 'Cabide 58',
          pieces_per_cicle: 1,
          mold_id: 1,
          rawmaterial_id: null,
          manufacturable: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: 'Cabide 38',
          pieces_per_cicle: 1,
          mold_id: 2,
          rawmaterial_id: null,
          manufacturable: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: 'Gancho de Plastico',
          pieces_per_cicle: 1,
          mold_id: 2,
          rawmaterial_id: null,
          manufacturable: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          name: 'Cabide terno 55',
          pieces_per_cicle: 1,
          mold_id: 3,
          rawmaterial_id: null,
          manufacturable: true,
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
    return queryInterface.bulkDelete('subproducts', null, {});
  },
};
