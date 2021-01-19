const router = require('express').Router();

const userSchemas = require('../schemas/userSchemas');
const userController = require('../controllers/usersController');
const { ConflictError } = require('../errors');

router.post('/', async (req, res) => {
    const { error } = userSchemas.identityData.validate(req.body);
    if (error) return res.sendStatus(422);

    try {
        res.status(201).send(await userController.createUser(req.body));
    }
    catch(err) {
        if (err instanceof ConflictError) res.status(409).send(err.message);
        else res.sendStatus(500);
    }
});

module.exports = router;