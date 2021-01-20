'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("orders",
      [
        {
          userId: 1,
          status: 'closed',
          createdAt: new Date(),
          updatedAt: new Date() 
        }
      ])
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete("orders",
    [
      {
        userId: 1,
        status: 'closed'
      }

    ])
     
  }
};
