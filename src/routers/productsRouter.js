const router = require('express').Router();
const productsController = require('../controllers/productsController');
const productsSchemas = require('../schemas/productsSchemas');
router.post('/', async (req, res) => {
    const { error } = productsSchemas.postProduct.validate(req.body);
    if (error) return res.sendStatus(422);

    try {
        const createdProduct = await productsController.createProduct(req.body);
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
            'Content-Range': 'products 0-10/20'
        });
        res.status(200).send(await productsController.getAll());
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});


router.put('/:id', async (req, res) => {
    //validar req.body

    let { id } = req.params;
    id = parseInt(id);

    try {
        res.status(200).send(await productsController.editProduct(productData));
    }
    catch(err) {
        if (err instanceof NotFoundError) return res.status(404).send(err.message);
        else res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {
    let { id } = req.params;
    id = parseInt(id);

    try {
        await productsController.deleteCategory(id);
        res.sendStatus(204);
    }
    catch(err) {
        console.error(err);
        if (err instanceof NotFoundError) return res.status(404).send(err.message);
        else res.sendStatus(500);
    }
});

module.exports = router;