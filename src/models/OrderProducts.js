const { Sequelize } = require("sequelize");
const sequelize = require('../utils/database');

class OrderProduct extends Sequelize.Model { }

OrderProduct.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        orderId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        productId:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        quantity:{
            type: Sequelize.INTEGER,
            allowNull:false,
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
        modelName: 'orderProduct'
    }
);

module.exports = OrderProduct;