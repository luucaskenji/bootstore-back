'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    const array = [
      [
        { alt: "Uma embalagem grande e uma pequena, de cor branca com detalhes em roxo, uma ao lado da outra e três palitos de incenso abaixo" }, 
        { id: 2 }

      ], [
        { alt: "Uma embalagem grande de cor preta com detalhes amarelos e um cone ao seu lado" }, 
        { id: 3 }

      ], [
        { alt: "Uma embalagem grande e uma pequena, de cor branca com detalhes em rosa, uma ao lado da outra e três palitos de incenso abaixo" }, 
        { id: 4 }

      ], [
        { alt: "Uma embalagem grande e uma pequena, de cor preta com detalhes em amarelo, verde e branco, uma ao lado da outra e três palitos de incenso abaixo" }, 
        { id: 5 }

      ], [
        { alt: "Uma embalagem e um pequeno frasco de vidro. Embalagem e rótulo nas cores branca e roxo" }, 
        { id: 6 }

      ], [
        { alt: "Uma embalagem pequena de cor preta com detalhes dourados e uma barra de sabotene oval na cor amarela" }, 
        { id: 7 }

      ], [
        { alt: "Uma embalagem e um pequeno frasco de vidro. Embalagem e rótulo nas cores amarelo e branco" }, 
        { id: 9 }

      ], [
        { alt: "Uma embalagem e um pequeno frasco de vidro. Embalagem e rótulo nas cores pretos com detalhes em rosa, roxo, azul, verde entre outras cores" }, 
        { id: 10 }

      ], [
        { alt: "Pulseira de pedras redondas em vários tons de azul e entre elas, peças que aparentam prata e são trabalhadas com detalhes" }, 
        { id: 11 }

      ], [
        { alt: "Pulseira de pedras redondas nas cores marrom, amarelo e roxo e entre elas, algumas peças que aparentam cobre e são trabalhadas com detalhes" }, 
        { id: 12 }

      ], [
        { alt: "Pulseira de pedras redondas na cor verde com detalhes em marrom e entre elas, um pingente do Símbolo Om que aparenta ouro envelhecido" }, 
        { id: 13 }

      ], [
        { alt: "Pulseira de pedras redondas nas cores preta e branca e entre elas, um pingente do Buddha em cobre" }, 
        { id: 14 }
      ], [
        { alt:"Colar que pode ser usado como pulseira, com pedras redondas nas cores verde, marrom e outras cores de tom terra e entre elas, um pingente redondo trabalhado em detalhes na cor dourada"}, 
        { id: 15 }

      ], [
        { alt: "Uma embalagem e um pequeno frasco de vidro. Embalagem e rótulo na cor branca com detalhes em azul e vermelho" }, 
        { id: 8 }

      ]

    ];

    array.forEach(async (u) => {
      await queryInterface.bulkUpdate("products", 
      { alt: u[0].alt }, 
      { id: u[1].id }
      )

    })
    

  },
    
  down: async (queryInterface, Sequelize) => {

    const array = [
      [
        { alt: "Uma embalagem grande e uma pequena, de cor branca com detalhes em roxo, uma ao lado da outra e três palitos de incenso abaixo" }, 
        { id: 2 }

      ], [
        { alt: "Uma embalagem grande de cor preta com detalhes amarelos e um cone ao seu lado" }, 
        { id: 3 }

      ], [
        { alt: "Uma embalagem grande e uma pequena, de cor branca com detalhes em rosa, uma ao lado da outra e três palitos de incenso abaixo" }, 
        { id: 4 }

      ], [
        { alt: "Uma embalagem grande e uma pequena, de cor preta com detalhes em amarelo, verde e branco, uma ao lado da outra e três palitos de incenso abaixo" }, 
        { id: 5 }

      ], [
        { alt: "Uma embalagem e um pequeno frasco de vidro. Embalagem e rótulo nas cores branca e roxo" }, 
        { id: 6 }

      ], [
        { alt: "Uma embalagem pequena de cor preta com detalhes dourados e uma barra de sabotene oval na cor amarela" }, 
        { id: 7 }

      ], [
        { alt: "Uma embalagem e um pequeno frasco de vidro. Embalagem e rótulo nas cores amarelo e branco" }, 
        { id: 9 }

      ], [
        { alt: "Uma embalagem e um pequeno frasco de vidro. Embalagem e rótulo nas cores pretos com detalhes em rosa, roxo, azul, verde entre outras cores" }, 
        { id: 10 }

      ], [
        { alt: "Pulseira de pedras redondas em vários tons de azul e entre elas, peças que aparentam prata e são trabalhadas com detalhes" }, 
        { id: 11 }

      ], [
        { alt: "Pulseira de pedras redondas nas cores marrom, amarelo e roxo e entre elas, algumas peças que aparentam cobre e são trabalhadas com detalhes" }, 
        { id: 12 }

      ], [
        { alt: "Pulseira de pedras redondas na cor verde com detalhes em marrom e entre elas, um pingente do Símbolo Om que aparenta ouro envelhecido" }, 
        { id: 13 }

      ], [
        { alt: "Pulseira de pedras redondas nas cores preta e branca e entre elas, um pingente do Buddha em cobre" }, 
        { id: 14 }
      ], [
        { alt:"Colar que pode ser usado como pulseira, com pedras redondas nas cores verde, marrom e outras cores de tom terra e entre elas, um pingente redondo trabalhado em detalhes na cor dourada"}, 
        { id: 15 }

      ], [
        { alt: "Uma embalagem e um pequeno frasco de vidro. Embalagem e rótulo na cor branca com detalhes em azul e vermelho" }, 
        { id: 8 }

      ]

    ];

    array.forEach(async (u) => {
      await queryInterface.bulkDelete("products", 
        { alt: u[0].alt }, 
        { id: u[1].id }
      )

    })

  }
};
         
