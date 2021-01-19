const { Sequelize } = require("sequelize");
const sequelize = require('../utils/database');

class CategoryProduct extends Sequelize.Model { }

CategoryProduct.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        productId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        categoryId: {
            type: Sequelize.INTEGER,
            allowNull: false
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
        modelName: 'categoryProduct'
    }
);

module.exports = CategoryProduct;