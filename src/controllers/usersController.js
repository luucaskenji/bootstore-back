const User = require('../models/User');
const { ConflictError } = require('../errors');

class UserController {
    async createUser(userData) {
        const { name, cpf, email } = userData;

        const [createdUser, hasBeenCreated] = await User.findOrCreate({ where: { cpf }, defaults: { name, email } });
        if (!hasBeenCreated) throw new ConflictError('User is already on database');

        return createdUser;
    }

    getAll() {
        return User.findAll();
    }
}

module.exports = new UserController();