'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('categories',
      [
        {
          name : 'Incenso', 
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name : 'Aromaterapia', 
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name : 'Japamala', 
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name : 'Meditação', 
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name : 'Massagem', 
          createdAt:new Date(),
          updatedAt:new Date()
        },
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('categories',
      [
        { name : 'Incenso' },
        { name : 'Aromaterapia' },
        { name : 'Japamala' },
        { name : 'Meditação' },
        { name : 'Massagem' },
      ]
    ) 
  }
};
