const router = require('express').Router();

const userSchemas = require('../schemas/userSchemas');
const usersController = require('../controllers/usersController');
const { ConflictError, NotFoundError } = require('../errors');

router.post('/', async (req, res) => {
    const { error } = userSchemas.identityData.validate(req.body);
    if (error) return res.sendStatus(422);

    try {
        const createdUser = await usersController.createUser(req.body);

        res.status(201).send(createdUser);
    }
    catch(err) {
        if (err instanceof ConflictError) res.status(409).send(err.message);
        else res.sendStatus(500);
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await usersController.getAll();

        res.status(200).send(users);
    }
    catch {
        res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        await usersController.deleteUser(id);

        res.sendStatus(204);
    }
    catch(err) {
        if (err instanceof NotFoundError) res.status(404).send(err.message);
        else res.sendStatus(500);
    }
});

router.post('/:id/address', async (req, res) => {
    const { error } = userSchemas.addressdata.validate(req.body);
    if (error) return res.sendStatus(422);

    const userId = parseInt(req.params.id);

    try {
        const createdAddress = await usersController.postUserAddress(userId, req.body);

        res.status(201).send(createdAddress);
    }
    catch(err) {
        if (err instanceof NotFoundError) res.status(404).send(err.message);
        else res.sendStatus(500);
    }
});

module.exports = router;