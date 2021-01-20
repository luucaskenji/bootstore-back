'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("categoryProducts",
      [
        {
          productId: 11,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 12,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 13,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 14,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 15,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date() 
        },

      ])
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete("categoryProducts",
    [
      {
        productId: 11,
        categoryId: 3,
      },
      {
        productId: 12,
        categoryId: 3,
      },
      {
        productId: 13,
        categoryId: 3, 
      },
      {
        productId: 14,
        categoryId: 3, 
      },
      {
        productId: 15,
        categoryId: 3,
      },

    ])
     
  }
};
