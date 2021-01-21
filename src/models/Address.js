const { Sequelize } = require('sequelize');
const sequelize = require('../utils/database');

class Address extends Sequelize.Model { }

Address.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        cep: {
            type: Sequelize.STRING,
            allowNull: false
        },
        state: {
            type: Sequelize.STRING,
            allowNull: false
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false
        },
        neighbourhood: {
            type: Sequelize.STRING,
            allowNull: false
        },
        streetName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        streetNumber: {
            type: Sequelize.STRING,
            allowNull: false
        },
        complement: {
            type: Sequelize.STRING,
            allowNull: true
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
        modelName: 'address'
    }
);

module.exports = Address;