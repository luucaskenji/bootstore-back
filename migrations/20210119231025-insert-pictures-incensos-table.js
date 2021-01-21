'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("pictures",
      [
        {
          productId: 1,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/nagchampa-incenso-yogateria-.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 1,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/nagchampa-incenso-caixinha-yogateria.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 1,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/nagchampa-incenso-caixa-yogateria-500x500.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 2,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/lavanda-yogateria-500x500.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 2,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/lavanda-incenso-caixinha-yogateria.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 2,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/lavanda.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 3,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/cone-incenso-goloka-sandalo-yogateria.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 4,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/lotus-incenso-yogateria--500x500.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 4,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/lotus-incenso-caixinha-yogateria.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 4,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/lotus-500x500.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 5,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/salvia-incenso-yogateria-500x500.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 5,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/salvia-incenso-caixinha-yogateria.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 5,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/salviabranca.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },

      ])
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete("pictures",
    [
      {
        productId: 1,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/nagchampa-incenso-yogateria-.jpg'
      },
      {
        productId: 1,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/nagchampa-incenso-caixinha-yogateria.jpg'
      },
      {
        productId: 1,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/nagchampa-incenso-caixa-yogateria-500x500.jpg'
      },
      {
        productId: 2,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/lavanda-yogateria-500x500.jpg'
      },
      {
        productId: 2,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/lavanda-incenso-caixinha-yogateria.jpg'
      },
      {
        productId: 2,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/lavanda.jpg' 
      },
      {
        productId: 3,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/cone-incenso-goloka-sandalo-yogateria.jpg'
      },
      {
        productId: 4,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/lotus-incenso-yogateria--500x500.jpg'
      },
      {
        productId: 4,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/lotus-incenso-caixinha-yogateria.jpg'
      },
      {
        productId: 4,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/lotus-500x500.jpg' 
      },
      {
        productId: 5,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/salvia-incenso-yogateria-500x500.jpg'
      },
      {
        productId: 5,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/salvia-incenso-caixinha-yogateria.jpg'
      },
      {
        productId: 5,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/salviabranca.jpg'
      },

    ])
     
  }
};
