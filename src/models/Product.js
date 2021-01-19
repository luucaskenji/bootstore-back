const { Sequelize } = require("sequelize");
const sequelize = require('../utils/database');

class Product extends Sequelize.Model { }

Product.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false
        },  
        description:{
            type: Sequelize.STRING,
        },  
        units:{
            type:Sequelize.INTEGER,
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
        modelName: 'product'
    }
);

module.exports = Product;