const uuid = require('uuid');

const User = require('../models/User');
const Session = require('../models/Session');
const { ConflictError, NotFoundError } = require('../errors');

class UsersController {
    async createUser(userData) {
        const { name, cpf, email } = userData;

        const [createdUser, hasBeenCreated] = await User.findOrCreate({ where: { cpf }, defaults: { name, email } });
        if (!hasBeenCreated) throw new ConflictError('User is already on database');

        return createdUser;
    }

    getAll() {
        return User.findAll();
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

    postAdminSignIn(email, password) {
        if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
            throw new AuthError('Wrong email or password');
        }

        const token = uuid.v4();

        return Session.create({ token });
    }
}

module.exports = new UsersController();