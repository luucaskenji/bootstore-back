'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("pictures",
      [
        {
          productId: 11,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/02/Pulseira-Mala-com-agata-azul.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 11,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/02/Pulseira-Mala-com-agata-azul-pulso.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 12,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/02/pulseira-pedra-500x500.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 12,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/02/pulseira-pedra-detalhe.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 13,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/05/mala-pulseira-turquesa-imperial-verde.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 13,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/05/mala-pulseira-turquesa-imperial-verde-2.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 14,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/08/pulseira-mala-agata-preta-yogateria-1.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 14,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/08/pulseira-mala-agata-preta-yogateria-2.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 15,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/02/pulseira-mala-agata-indiana-flor-da-vida.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 15,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/02/pulseira-mala-agata-indiana-flor-da-vida-pescoco.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          productId: 15,
          url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/02/pulseira-mala-agata-indiana-flor-da-vida-pulso.jpg',
          createdAt: new Date(),
          updatedAt: new Date() 
        }

      ])
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete("pictures",
    [
      {
        productId: 11,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/02/Pulseira-Mala-com-agata-azul.jpg' 
      },
      {
        productId: 11,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/02/Pulseira-Mala-com-agata-azul-pulso.jpg' 
      },
      {
        productId: 12,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/02/pulseira-pedra-500x500.jpg' 
      },
      {
        productId: 12,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/02/pulseira-pedra-detalhe.jpg' 
      },
      {
        productId: 13,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/05/mala-pulseira-turquesa-imperial-verde.jpg' 
      },
      {
        productId: 13,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/05/mala-pulseira-turquesa-imperial-verde-2.jpg' 
      },
      {
        productId: 14,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/08/pulseira-mala-agata-preta-yogateria-1.jpg'
      },
      {
        productId: 14,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/08/pulseira-mala-agata-preta-yogateria-2.jpg'
      },
      {
        productId: 15,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/02/pulseira-mala-agata-indiana-flor-da-vida.jpg'
      },
      {
        productId: 15,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/02/pulseira-mala-agata-indiana-flor-da-vida-pescoco.jpg' 
      },
      {
        productId: 15,
        url: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/02/pulseira-mala-agata-indiana-flor-da-vida-pulso.jpg' 
      }
    ])
     
  }
};
