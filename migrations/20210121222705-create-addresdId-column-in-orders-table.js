'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('orders', 'addressId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'addresses',
        key: 'id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('orders', 'addressId');
  }
};