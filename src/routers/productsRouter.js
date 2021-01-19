const router = require('express').Router();
const productsController = require('../controllers/productsController');
const productsSchemas = require('../schemas/productsSchemas');
const { ConflictError, NotFoundError } = require('../errors');
const Category = require('../models/Category');

//USER && ADMIN
router.get('/:id', async (req, res) => {
    let { id } = req.params;
    id = parseInt(id);
    try {
        const product = await productsController.getProductById(id);
        res.status(200).send(product);
    }
    catch (err) {
        console.log(err);
        if (err instanceof NotFoundError) return res.status(404).send(err.message);
        else res.sendStatus(500);
    }
});

router.get('/', async (req, res) => {
    try {
        res.set({
            'Access-Control-Expose-Headers': 'Content-Range',
            'Content-Range': 'products 0-10/20'
        });
        res.status(200).send(await productsController.getAll());
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

module.exports = router;