'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.sequelize.query('ALTER TABLE "products" ALTER COLUMN "price" TYPE integer USING (price::integer);')

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('products', 'price', {
      type: Sequelize.INTEGER,
      allowNull: false

    })
  }
};
