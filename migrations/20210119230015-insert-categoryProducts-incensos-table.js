'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("categoryProducts",
      [
        {
          productId: 1,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 2,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 3,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 4,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 5,
          categoryId: 1,
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
