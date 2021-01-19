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

//ADMIN

router.put('/:id', async (req, res) => {
    //validar req.body

    let { id } = req.params;
    id = parseInt(id);

    try {
        res.status(200).send(await productsController.editProduct(id,req.body));
    }
    catch (err) {
        console.log(err);
        if (err instanceof NotFoundError) return res.status(404).send(err.message);
        else res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {
    let { id } = req.params;
    id = parseInt(id);

    try {
        await productsController.deleteProduct(id);
        res.sendStatus(204);
    }
    catch (err) {
        console.error(err);
        if (err instanceof NotFoundError) return res.status(404).send(err.message);
        else res.sendStatus(500);
    }
});

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

router.post('/:productId/categories/:categoryId', async (req,res) => {
    let {productId, categoryId} = req.params;
    productId = parseInt(productId);
    categoryId = parseInt(categoryId);

    try{
        await productsController.createCategoryProduct(productId,categoryId);
        res.sendStatus(200);
    }
    catch (err) {
        console.log(err);
        if (err instanceof ConflictError) return res.status(409).send(err.message);
        else res.sendStatus(500);
    }
});


module.exports = router;