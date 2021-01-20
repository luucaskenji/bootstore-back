const router = require('express').Router();

const ordersController = require('../../controllers/ordersController');
const { ConflictError, NotFoundError } = require('../../errors');
const orderSchemas = require('../../schemas/ordersSchemas');

router.post('/', async (req, res) => {
    const { error } = orderSchemas.postOrder.validate(req.body);
    if (error) return res.sendStatus(422);

    try {
        const order = await ordersController.createOrder(req.body);
        res.status(201).send(order);
    }
    catch(err) {
        console.log(err);
        if (err instanceof ConflictError) res.status(409).send(err.message);
        else res.sendStatus(500);
    }
});

router.get('/', async (req, res) => {
    try {
        res.set({
            'Access-Control-Expose-Headers': 'Content-Range',
            'Content-Range': 10
        });
        res.status(200).send(await ordersController.getAll());
    }
    catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        res.status(200).send(await ordersController.getOrderById(id));
    }
    catch {
        res.sendStatus(500);
    }
});


router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        res.status(204).send(await ordersController.deleteOrder(id));
    }
    catch(err) {
        if (err instanceof NotFoundError) res.status(404).send(err.message);
        else res.sendStatus(500);
    }
});

module.exports = router;