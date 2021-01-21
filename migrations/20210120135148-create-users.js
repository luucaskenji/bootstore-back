'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users",
      [
        {
          name: 'Pedrão Barros',
          email: 'barrospedrao@gmail.com',
          cpf: '333.444.888-55',
          createdAt: new Date(),
          updatedAt: new Date() 
        }
      ])
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete("users",
    [
      {
        name: 'Pedrão Barros',
        email: 'barrospedrao@gmail.com',
        cpf: '333.444.888-55'
      }
    ])
     
  }
};
