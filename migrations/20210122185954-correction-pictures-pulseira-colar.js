'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate("products", 
    {
      mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/02/pulseira-mala-agata-indiana-flor-da-vida-500x500.jpg"
    }, {
      id: 15
    })

  },
    
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products",
    [
      {
        productId: 15,
      
      }
    ])
  }
};