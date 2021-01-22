'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn( "products", "alt", Sequelize.STRING );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn( "products", "alt" );
  }
};
