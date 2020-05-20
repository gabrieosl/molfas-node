module.exports = {
  up: queryInterface => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      'avatars',
      [
        {
          id: 1,
          path: 'https://api.adorable.io/avatars/200/1.png',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          path: 'https://api.adorable.io/avatars/200/2.png',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          path: 'https://api.adorable.io/avatars/200/3.png',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          path: 'https://api.adorable.io/avatars/200/4.png',
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
    return queryInterface.bulkDelete('avatars', null, {});
  },
};
