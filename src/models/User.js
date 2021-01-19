const { Sequelize } = require("sequelize");
const sequelize = require('../utils/database');

class User extends Sequelize.Model { }

User.init(
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
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cpf: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
    },
    {
        sequelize,
        modelName: 'user'
    }
);

module.exports = User;