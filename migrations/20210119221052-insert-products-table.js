'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('products',
      [ 
        { 
          name: 'Incenso Massala Nag Champa',
          price: 1400,
          description: 'Energia da Meditação. Fragrância floral, amadeirada e oriental. Um dos melhores incensos do mundo. Matérias primas naturais orgânicas. Produto não tóxico enrolado à mão na Índia. Caixinha com 12-15 varetas.',
          units: 10,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/nagchampa-incenso-yogateria-.jpg' ,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        { 
          name: 'Incenso Massala Ayurvédico',
          price: 1400,
          description: 'Energia Calmante e Relaxante.Fragrância floral suave. Matérias primas naturais orgânicas. Produto não tóxico enrolado à mão na Índia. Caixinha com 12-15 varetas.',
          units: 30,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/lavanda-yogateria.jpg' ,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        { 
          name: 'Incenso Cone Sândalo Goloka',
          price: 1400,
          description: 'Energia Espiritual. Sândalo – A madeira sagrada. Fragrância amadeirada oriental. Matérias primas naturais, veganas e orgânicas. Caixa contém 10 cones e 1 mini incensário. Produto não tóxico feito na Índia',
          units: 7,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/cone-incenso-goloka-sandalo-yogateria.jpg' ,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        { 
          name: 'Incenso Massala Ayurvédico Lótus Goloka',
          price: 1400,
          description: 'Energia de Purificação. Fragrância floral amendoada. Matérias primas naturais orgânicas. Produto não tóxico enrolado à mão na Índia. Caixinha com 12-15 varetas.',
          units: 12,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/lotus-incenso-yogateria-.jpg' ,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        { 
          name: 'Incenso Massala Ayurvédico Sálvia Branca Goloka',
          price: 1400,
          description: 'Energia Positiva e Neutralizador de Odores. Fragrância refrescante. Matérias primas naturais orgânicas. Produto não tóxico enrolado à mão na Índia.',
          units: 3,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/salvia-incenso-yogateria.jpg' ,
          createdAt: new Date(),
          updatedAt: new Date() 
        },

      ]);
    
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('products',
      [
        { 
          name: 'Incenso Massala Nag Champa',
          price: 1400,
          description: 'Energia da Meditação. Fragrância floral, amadeirada e oriental. Um dos melhores incensos do mundo. Matérias primas naturais orgânicas. Produto não tóxico enrolado à mão na Índia. Caixinha com 12-15 varetas.',
          units: 10,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/nagchampa-incenso-yogateria-.jpg'
        },
        { 
          name: 'Incenso Massala Ayurvédico',
          price: 1400,
          description: 'Energia Calmante e Relaxante.Fragrância floral suave. Matérias primas naturais orgânicas. Produto não tóxico enrolado à mão na Índia. Caixinha com 12-15 varetas.',
          units: 30,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/lavanda-yogateria.jpg' 
        },
        { 
          name: 'Incenso Cone Sândalo Goloka',
          price: 1400,
          description: 'Energia Espiritual. Sândalo – A madeira sagrada. Fragrância amadeirada oriental. Matérias primas naturais, veganas e orgânicas. Caixa contém 10 cones e 1 mini incensário. Produto não tóxico feito na Índia',
          units: 7,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/cone-incenso-goloka-sandalo-yogateria.jpg'
        },
        { 
          name: 'Incenso Massala Ayurvédico Lótus Goloka',
          price: 1400,
          description: 'Energia de Purificação. Fragrância floral amendoada. Matérias primas naturais orgânicas. Produto não tóxico enrolado à mão na Índia. Caixinha com 12-15 varetas.',
          units: 12,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/lotus-incenso-yogateria-.jpg'
        },
        { 
          name: 'Incenso Massala Ayurvédico Sálvia Branca Goloka',
          price: 1400,
          description: 'Energia Positiva e Neutralizador de Odores. Fragrância refrescante. Matérias primas naturais orgânicas. Produto não tóxico enrolado à mão na Índia.',
          units: 3,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/salvia-incenso-yogateria.jpg'
        },
        
      ]
    ) 
    
  }
};
