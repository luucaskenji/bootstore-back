'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('paymentDatas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      paymentMethod: {
        type: Sequelize.STRING,
        allowNull: false
      },
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'orders',
          key: 'id'
        }
      },
      cardName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cardNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      expiration: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cvv: {
        type: Sequelize.STRING(3),
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('paymentDatas');
  }
};