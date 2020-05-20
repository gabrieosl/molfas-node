module.exports = {
  up: queryInterface => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      'products',
      [
        {
          id: 1,
          category_id: null,
          name: 'Cabide 58 com Gancho de Ferro',
          description: 'Cabide tamanho 58 com gancho de ferro',
          price: 22.9,
          active: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          category_id: null,
          name: 'Cabide 58 com Gancho de Plástico',
          description: 'Cabide tamanho 58 com gancho de plástico',
          price: 18.9,
          active: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          category_id: null,
          name: 'Cabide 58 com Gancho de Plástico e Presilha',
          description: 'Cabide tamanho 58 com gancho de plástico e presilha',
          price: 20.9,
          active: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          category_id: null,
          name: 'Cabide 36 com Gancho de Plástico',
          description: 'Cabide tamanho 58 com gancho de plástico',
          price: 15.9,
          active: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          category_id: null,
          name: 'Capa de terno',
          description: 'Capa de TNT para terno',
          price: 5.9,
          active: true,
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
    return queryInterface.bulkDelete('products', null, {});
  },
};
