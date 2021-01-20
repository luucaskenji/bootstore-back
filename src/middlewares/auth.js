const Session = require('../models/Session');
const { AuthError } = require('../errors');

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');
        if (!authHeader) throw new AuthError('Authorization header not found');

        const token = authHeader.split(' ')[1];
        if (!token) throw new AuthError('Token not found');

        const userSession = await Session.findOne({ where: { token } });
        if (!userSession) throw new AuthError('Not valid token');

        next();
    }
    catch(err) {
        if (err instanceof AuthError) res.status(403).send(err.message);
        else res.sendStatus(500);
    }
};

module.exports = authMiddleware;