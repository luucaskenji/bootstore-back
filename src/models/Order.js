const { Sequelize } = require("sequelize");
const sequelize = require('../utils/database');

class Order extends Sequelize.Model { }

Order.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        userId:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        status:{
            type: Sequelize.STRING,
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
        modelName: 'order'
    }
);

module.exports = Order;