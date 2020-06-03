module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          name: 'Gabriel Lima',
          username: 'gabrieosl',
          email: 'gabriel@gadev.me',
          password_hash:
            '$2a$08$GiV/9nLc7ZJXGsprB/4MCOPmEjags22W9j1zxDI0Ze1cbKoGJ7CnW',
          role: 'ADM',
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
    return queryInterface.bulkDelete('users', null, {});
  },
};
