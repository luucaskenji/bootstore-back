'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('products',
      [ 
        { 
          name: 'Perfume Indiano Lavanda Goloka',
          price: 2900,
          description: 'Energia Calmante e Relaxante.Fragrância floral suave.Perfume indiano em óleo com propriedades hidratantes.Natural, vegano e super concentrado. Frasco de vidro com 10ml. Com aplicador roll-on. Não contém álcool',
          units: 2,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/perfume-lavanda-goloka-yogateria.jpg' ,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        { 
          name: 'Sabonete Natural Sândalo Goloka',
          price: 1600,
          description: 'Aroma da Vitória. Fragrância amadeirada oriental. Tamanho: 5.5 x 8.5 x 2cm, 75g.',
          units: 3,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/sabonete-sandalo-yogateria.jpg' ,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        { 
          name: 'Perfume Indiano Flor de Laranjeira Goloka',
          price: 2900,
          description: 'Energia Calmante e Alívio de Estresse. Fragrância cítrica floral amadeirada.Perfume indiano em óleo com propriedades hidratantes. Natural, vegano e super concentrado. Frasco de vidro com 10ml. Com aplicador roll-on. Não contém álcool',
          units: 7,
          mainPicture: 'https://yogateria.com.br/lifestyle/oleo-perfumado-flor-de-laranjeira/' ,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        { 
          name: 'Perfume Indiano Nag Champa Goloka',
          price: 2900,
          description: 'Energia da Meditação. Fragrância floral, amadeirada e oriental. Perfume indiano em óleo com propriedades hidratantes. Natural, vegano e super concentrado. Frasco de vidro com 10ml. Com aplicador roll-on. Não contém álcool',
          units: 4,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/oleo-perfumado-nag-champa-goloka-yogateria.jpg' ,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        { 
          name: 'Perfume Indiano Chakra Goloka',
          price: 2900,
          description: 'Equilíbrio dos Chakras. Fragrância floral. Natural, vegano e super concentrado. Frasco de vidro com 10ml. Com aplicador roll-on. Não contém álcool',
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
          name: 'Perfume Indiano Lavanda Goloka',
          price: 2900,
          description: 'Energia Calmante e Relaxante.Fragrância floral suave.Perfume indiano em óleo com propriedades hidratantes.Natural, vegano e super concentrado. Frasco de vidro com 10ml. Com aplicador roll-on. Não contém álcool',
          units: 2,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/perfume-lavanda-goloka-yogateria.jpg'
        },
        { 
          name: 'Sabonete Natural Sândalo Goloka',
          price: 1600,
          description: 'Aroma da Vitória. Fragrância amadeirada oriental. Tamanho: 5.5 x 8.5 x 2cm, 75g.',
          units: 3,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/sabonete-sandalo-yogateria.jpg'
        },
        { 
          name: 'Perfume Indiano Flor de Laranjeira Goloka',
          price: 2900,
          description: 'Energia Calmante e Alívio de Estresse. Fragrância cítrica floral amadeirada.Perfume indiano em óleo com propriedades hidratantes. Natural, vegano e super concentrado. Frasco de vidro com 10ml. Com aplicador roll-on. Não contém álcool',
          units: 7,
          mainPicture: 'https://yogateria.com.br/lifestyle/oleo-perfumado-flor-de-laranjeira/' 
        },
        { 
          name: 'Perfume Indiano Nag Champa Goloka',
          price: 2900,
          description: 'Energia da Meditação. Fragrância floral, amadeirada e oriental. Perfume indiano em óleo com propriedades hidratantes. Natural, vegano e super concentrado. Frasco de vidro com 10ml. Com aplicador roll-on. Não contém álcool',
          units: 4,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/oleo-perfumado-nag-champa-goloka-yogateria.jpg'
        },
        { 
          name: 'Perfume Indiano Chakra Goloka',
          price: 2900,
          description: 'Equilíbrio dos Chakras. Fragrância floral. Natural, vegano e super concentrado. Frasco de vidro com 10ml. Com aplicador roll-on. Não contém álcool',
          units: 3,
          mainPicture: 'https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/perfume-chakra-goloka-yogateria.jpg' 
        }
        
      ]
    ) 
    
  }
};
