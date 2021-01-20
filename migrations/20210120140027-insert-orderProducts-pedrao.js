'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("orderProducts",
      [
        {
          quantity: 2,
          orderId: 1,
          productId: 5,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          quantity: 1,
          orderId: 1,
          productId: 15,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          quantity: 1,
          orderId: 1,
          productId: 9,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          quantity: 1,
          orderId: 1,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          quantity: 3,
          orderId: 1,
          productId: 11,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
      ])
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete("orderProducts",
    [
      {
        quantity: 2,
        orderId: 1,
        productId: 5
      },
      {
        quantity: 1,
        orderId: 1,
        productId: 15
      },
      {
        quantity: 1,
        orderId: 1,
        productId: 9 
      },
      {
        quantity: 1,
        orderId: 1,
        productId: 1
      },
      {
        quantity: 3,
        orderId: 1,
        productId: 11 
      }

    ])
     
  }
};
