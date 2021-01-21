const uuid = require('uuid');

const User = require('../models/User');
const Session = require('../models/Session');
const Address = require('../models/Address');
const { ConflictError, NotFoundError, AuthError } = require('../errors');

class UsersController {
    async createUser(userData) {
        const { name, cpf, email } = userData;

        const [createdUser, hasBeenCreated] = await User.findOrCreate({ where: { cpf }, defaults: { name, email } });
        if (!hasBeenCreated) throw new ConflictError('User is already on database');

        return createdUser;
    }

    getAll(limit = null, offset = null) {
        return User.findAll({limit,offset});
    }

    async deleteUser(id) {
        const requiredUser = await User.findByPk(id);
        if (!requiredUser) throw new NotFoundError('User not found');

        await requiredUser.destroy();
    }

    async getUserById(id){
        const user = await User.findByPk(id);
        if(!user) throw new NotFoundError('User not found');
        return user;
    }

    postAdminSignIn(username, password) {
        if (username !== process.env.ADMIN_USERNAME || password !== process.env.ADMIN_PASSWORD) {
            throw new AuthError('Wrong username or password');
        }

        const token = uuid.v4();

        return Session.create({ token });
    }

    postAdminSignOut() {
        Session.destroy({ where: {} });
    }

    async postUserAddress(userId, data) {
        const user = await User.findOne({ where: { id: userId } });
        if (!user) throw new NotFoundError('User not found');

        const {
            cep,
            streetName,
            streetNumber,
            neighbourhood,
            complement,
            state,
            city
        } = data;

        return Address.create({ userId, cep, streetName, streetNumber, neighbourhood, complement, state, city });
    }
}

module.exports = new UsersController();