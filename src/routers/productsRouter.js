const router = require('express').Router();
const productsController = require('../controllers/productsController');
const productsSchemas = require('../schemas/productsSchemas');
const { NotFoundError } = require('../errors');

//USER && ADMIN
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const product = await productsController.getProductById(id);

        res.status(200).send(product);
    }
    catch(err) {
        if (err instanceof NotFoundError) return res.status(404).send(err.message);
        else res.sendStatus(500);
    }
});

router.get('/', async (req, res) => {
    try {
        const products = await productsController.getAll();

        res.set({
            'Access-Control-Expose-Headers': 'Content-Range',
            'Content-Range': 'products 0-10/20'
        });
        
        res.status(200).send(products);
    }
    catch(err) {
        res.sendStatus(500);
    }
});

module.exports = router;