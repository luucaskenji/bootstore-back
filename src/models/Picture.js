const { Sequelize } = require("sequelize");
const sequelize = require('../utils/database');

class Picture extends Sequelize.Model { }

Picture.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        productId:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        url: {
            type: Sequelize.STRING,
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
        modelName: 'picture'
    }
);

module.exports = Picture;