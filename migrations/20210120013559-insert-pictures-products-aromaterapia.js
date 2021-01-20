'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("pictures",
      [
        {
          productId: 6,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/perfume-lavanda-goloka-yogateria.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 6,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/lavanda.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 7,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/sabonete-sandalo-yogateria.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 8,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/perfume-flordelaranjeira-goloka-yogateria.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 9,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/oleo-perfumado-nag-champa-goloka-yogateria-500x500.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 10,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/perfume-chakra-goloka-yogateria-500x500.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        }

      ])
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete("pictures",
    [
      {
        productId: 6,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/perfume-lavanda-goloka-yogateria.jpg'
      },
      {
        productId: 6,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/lavanda.jpg' 
      },
      {
        productId: 7,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/sabonete-sandalo-yogateria.jpg' 
      },
      {
        productId: 8,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/perfume-flordelaranjeira-goloka-yogateria.jpg'
      },
      {
        productId: 9,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/oleo-perfumado-nag-champa-goloka-yogateria-500x500.jpg'
      },
      {
        productId: 10,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/perfume-chakra-goloka-yogateria-500x500.jpg'
      }

    ])
     
  }
};
