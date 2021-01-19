const router = require('express').Router();
const productsController = require('../controllers/productsController');
router.post('/', async (req, res) => {
    const { name, price, description, units, mainPicture } = req.body;

    // validar req.body

    try {
        const createdProduct = await productsController.createProduct(name);

        res.status(201).send(createdProduct);
    }
    catch (err) {
        console.log(err);
        if (err instanceof ConflictError) return res.status(409).send(err.message);
        else res.sendStatus(500);
    }
});

router.get('/', async (req, res) => {
    try {
        res.set({
            'Access-Control-Expose-Headers': 'Content-Range',
            'Content-Range': 'categories 0-10/20'
        });
        res.status(200).send(await categoriesController.getAll());
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

module.exports = router;