const router = require('express').Router();

const { ConflictError, NotFoundError } = require('../errors');
const orderSchemas = require('../schemas/ordersSchemas');

router.post('/', async (req, res) => {
    const { error } = orderSchemas.postOrder.validate(req.body);
    if (error) return res.sendStatus(422);

    try {
        
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

module.exports = router;