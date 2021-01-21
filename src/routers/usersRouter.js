const router = require('express').Router();

const userSchemas = require('../schemas/userSchemas');
const usersController = require('../controllers/usersController');
const { ConflictError, NotFoundError } = require('../errors');

router.post('/', async (req, res) => {
    const { error } = userSchemas.identityData.validate(req.body);
    if (error) return res.sendStatus(422);

    try {
        res.status(201).send(await usersController.createUser(req.body));
    }
    catch(err) {
        if (err instanceof ConflictError) res.status(409).send(err.message);
        else res.sendStatus(500);
    }
});

router.get('/', async (req, res) => {
    try {
        res.status(200).send(await usersController.getAll());
    }
    catch {
        res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        res.status(204).send(await usersController.deleteUser(id));
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