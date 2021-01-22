'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    const array = [
      [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/nagchampa-incenso-yogateria-.jpg" }, 
        { id: 1 }

      ], [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/lavanda-yogateria-500x500.jpg" }, 
        { id: 2 }

      ],[
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/cone-incenso-goloka-sandalo-yogateria-500x500.jpg" }, 
        { id: 3 }

      ], [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/lotus-incenso-yogateria--500x500.jpg" }, 
        { id: 4 }

      ], [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/salvia-incenso-yogateria-500x500.jpg" }, 
        { id: 5 }

      ], [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/perfume-lavanda-goloka-yogateria-500x500.jpg" }, 
        { id: 6 }

      ], [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/sabonete-sandalo-yogateria-500x500.jpg" }, 
        { id: 7 }

      ], [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/oleo-perfumado-nag-champa-goloka-yogateria-500x500.jpg" }, 
        { id: 9 }

      ], [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/perfume-chakra-goloka-yogateria-500x500.jpg" }, 
        { id: 10 }

      ], [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/02/Pulseira-Mala-com-agata-azul.jpg" }, 
        { id: 11 }

      ], [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/02/pulseira-pedra-500x500.jpg" }, 
        { id: 12 }

      ], [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/05/mala-pulseira-turquesa-imperial-verde-500x500.jpg" }, 
        { id: 13 }

      ], [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/08/pulseira-mala-agata-preta-yogateria-1.jpg" }, 
        { id: 14 }
      ], [
        { mainPicture:"https://yogateria.com.br/lifestyle/japamalas-pulseiras/pulseira-agata-flor-da-vida/"}, 
        { id: 15 }

      ], [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/perfume-flordelaranjeira-goloka-yogateria-500x500.jpg" }, 
        { id: 8 }

      ]

    ];

    array.forEach(async (u) => {
      await queryInterface.bulkUpdate("products", 
      { mainPicture: u[0].mainPicture }, 
      { id: u[1].id }
      )

    })
    

  },
    
  down: async (queryInterface, Sequelize) => {

    const array = [
      [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/nagchampa-incenso-yogateria-.jpg" }, 
        { id: 1 }

      ], [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/lavanda-yogateria-500x500.jpg" }, 
        { id: 2 }

      ],[
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/cone-incenso-goloka-sandalo-yogateria-500x500.jpg" }, 
        { id: 3 }

      ], [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/lotus-incenso-yogateria--500x500.jpg" }, 
        { id: 4 }

      ], [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/salvia-incenso-yogateria-500x500.jpg" }, 
        { id: 5 }

      ], [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/perfume-lavanda-goloka-yogateria-500x500.jpg" }, 
        { id: 6 }

      ], [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/sabonete-sandalo-yogateria-500x500.jpg" }, 
        { id: 7 }

      ], [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/oleo-perfumado-nag-champa-goloka-yogateria-500x500.jpg" }, 
        { id: 9 }

      ], [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/perfume-chakra-goloka-yogateria-500x500.jpg" }, 
        { id: 10 }

      ], [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/02/Pulseira-Mala-com-agata-azul.jpg" }, 
        { id: 11 }

      ], [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/02/pulseira-pedra-500x500.jpg" }, 
        { id: 12 }

      ], [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/05/mala-pulseira-turquesa-imperial-verde-500x500.jpg" }, 
        { id: 13 }

      ], [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/08/pulseira-mala-agata-preta-yogateria-1.jpg" }, 
        { id: 14 }
      ], [
        { mainPicture:"https://yogateria.com.br/lifestyle/japamalas-pulseiras/pulseira-agata-flor-da-vida/"}, 
        { id: 15 }

      ], [
        { mainPicture: "https://d17e8p84ng9nyb.cloudfront.net/wp-content/uploads/2020/07/perfume-flordelaranjeira-goloka-yogateria-500x500.jpg" }, 
        { id: 8 }

      ]

    ];

    array.forEach(async (u) => {
      await queryInterface.bulkDelete("products", 
        { mainPicture: u[0].mainPicture }, 
        { id: u[1].id }
      )

    })

  }
};
         
