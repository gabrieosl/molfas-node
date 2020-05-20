module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          name: 'Gabriel Lima',
          username: 'gabrieosl',
          email: 'ga.bri.el@msn.com',
          password_hash:
            '$2a$08$GiV/9nLc7ZJXGsprB/4MCOPmEjags22W9j1zxDI0Ze1cbKoGJ7CnW',
          role: 'ADM',
          active: true,
          avatar_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: 'Geruza Lima',
          username: 'geruza',
          email: 'geruza@forture.com.br',
          password_hash:
            '$2a$08$GiV/9nLc7ZJXGsprB/4MCOPmEjags22W9j1zxDI0Ze1cbKoGJ7CnW',
          role: 'ADM',
          active: true,
          avatar_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: 'ADM',
          username: 'adm',
          email: 'adm@forture.com.br',
          password_hash:
            '$2a$08$GiV/9nLc7ZJXGsprB/4MCOPmEjags22W9j1zxDI0Ze1cbKoGJ7CnW',
          role: 'ADM',
          active: true,
          avatar_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          name: 'Usuário',
          username: 'usuario',
          email: 'usuario@forture.com.br',
          password_hash:
            '$2a$08$GiV/9nLc7ZJXGsprB/4MCOPmEjags22W9j1zxDI0Ze1cbKoGJ7CnW',
          role: 'USER',
          active: true,
          avatar_id: 4,
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
