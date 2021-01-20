'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("categoryProducts",
      [
        {
          productId: 6,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 7,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 8,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 9,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 10,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date() 
        },

      ])
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete("categoryProducts",
    [
      {
        productId: 1,
        categoryId: 1,
      },
      {
        productId: 2,
        categoryId: 1,
      },
      {
        productId: 3,
        categoryId: 1, 
      },
      {
        productId: 4,
        categoryId: 1, 
      },
      {
        productId: 5,
        categoryId: 1,
      },

    ])
     
  }
};
