const { Sequelize } = require("sequelize");
const sequelize = require('../utils/database');

class PaymentDatas extends Sequelize.Model { }

PaymentDatas.init(
    {
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
    },
    {
        sequelize,
        modelName: 'paymentDatas'
    }
);

module.exports = PaymentDatas;