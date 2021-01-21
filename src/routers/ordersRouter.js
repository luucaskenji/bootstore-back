const router = require('express').Router();

const ordersController = require('../controllers/ordersController');
const { ConflictError, NotFoundError } = require('../errors');
const orderSchemas = require('../schemas/ordersSchemas');

router.post('/', async (req, res) => {
    const { error } = orderSchemas.postOrder.validate(req.body);
    if (error) return res.sendStatus(422);

    try {
        const order = await ordersController.createOrder(req.body);

        res.status(201).send(order);
    }
    catch(err) {
        if (err instanceof ConflictError) res.status(409).send(err.message);
        else res.sendStatus(500);
    }
});

router.get('/', async (req, res) => {
    try {
        const orders = await ordersController.getAll();

        res.status(200).send(orders);
    }
    catch {
        res.sendStatus(500);
    }
});

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const order = await ordersController.getOrderById(id);

        res.status(200).send(order);
    }
    catch {
        res.sendStatus(500);
    }
});


router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        await ordersController.deleteOrder(id);

        res.sendStatus(204);
    }
    catch(err) {
        if (err instanceof NotFoundError) res.status(404).send(err.message);
        else res.sendStatus(500);
    }
});

module.exports = router;