'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products',
      [ 
        { 
          name: 'Pulseira Mala Ágata Azul',
          price: 6900,
          description: 'Pulseira flexível com rocha natural. Pingente Árvore da Vida prateado. Para punhos médios e finos. Pedras com diâmetro de 8 mm. Diâmetro interno da pulseira (não esticada): 5,5 cm ',
          units: 9,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/02/Pulseira-Mala-com-agata-azul.jpg' ,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        { 
          name: 'Pulseira Mala Âmbar',
          price: 7100,
          description: 'Pulseira flexível com resina natural. Pingente Flor da Vida cobre. Para punhos médios e estreitos. Contas com diâmetro de 8 mm ',
          units: 2,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/02/pulseira-pedra.jpg' ,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        { 
          name: 'Pulseira Mala Jaspe Imperial',
          price: 6900,
          description: 'Pulseira flexível com rocha natural. Pingente Om dourado. Para punhos médios e finos. Contas com diâmetro de 8 mm',
          units: 7,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/05/mala-pulseira-turquesa-imperial-verde.jpg' ,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        { 
          name: 'Pulseira Mala Quartzo e Ágata Preta',
          price: 6900,
          description: 'Pulseira flexível com mineral natural. Quartzo Rutilado e Ágata Preta Facetada. Pingente Buddha cobre. Para punhos médios e estreitos. Contas com diâmetro de 8 mm',
          units: 4,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/08/pulseira-mala-agata-preta-yogateria-1.jpg' ,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        { 
          name: 'Pulseira-Colar Mala Ágata Indiana',
          price: 7900,
          description: 'Pulseira / colar flexível com rocha natural. Pingente Flor da Vida dourado. Pode ser usada como uma pulseira de quatro voltas ou colar. Para punhos médios e finos.Contas com diâmetro de 8 mm.',
          units: 3,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/perfume-chakra-goloka-yogateria.jpg' ,
          createdAt: new Date(),
          updatedAt: new Date() 
        },

      ]);
    
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('products',
      [
        { 
          name: 'Pulseira Mala Ágata Azul',
          price: 6900,
          description: 'Pulseira flexível com rocha natural. Pingente Árvore da Vida prateado. Para punhos médios e finos. Pedras com diâmetro de 8 mm. Diâmetro interno da pulseira (não esticada): 5,5 cm ',
          units: 9,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/02/Pulseira-Mala-com-agata-azul.jpg'
        },
        { 
          name: 'Pulseira Mala Âmbar',
          price: 7100,
          description: 'Pulseira flexível com resina natural. Pingente Flor da Vida cobre. Para punhos médios e estreitos. Contas com diâmetro de 8 mm ',
          units: 2,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/02/pulseira-pedra.jpg' 
        },
        { 
          name: 'Pulseira Mala Jaspe Imperial',
          price: 6900,
          description: 'Pulseira flexível com rocha natural. Pingente Om dourado. Para punhos médios e finos. Contas com diâmetro de 8 mm',
          units: 7,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/05/mala-pulseira-turquesa-imperial-verde.jpg'
        },
        { 
          name: 'Pulseira Mala Quartzo e Ágata Preta',
          price: 6900,
          description: 'Pulseira flexível com mineral natural. Quartzo Rutilado e Ágata Preta Facetada. Pingente Buddha cobre. Para punhos médios e estreitos. Contas com diâmetro de 8 mm',
          units: 4,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/08/pulseira-mala-agata-preta-yogateria-1.jpg' 
        },
        { 
          name: 'Pulseira-Colar Mala Ágata Indiana',
          price: 7900,
          description: 'Pulseira / colar flexível com rocha natural. Pingente Flor da Vida dourado. Pode ser usada como uma pulseira de quatro voltas ou colar. Para punhos médios e finos.Contas com diâmetro de 8 mm.',
          units: 3,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/perfume-chakra-goloka-yogateria.jpg' 
        },
        
      ]
    ) 
    
  }
};
