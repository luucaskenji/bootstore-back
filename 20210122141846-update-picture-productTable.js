'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate("products", 
    {
      mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/perfume-flordelaranjeira-goloka-yogateria.jpg"
    }, {
      id: 8
    })

  },
    
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products",
    [
      {
        productId: 8,
      
      }
    ])
  }
};