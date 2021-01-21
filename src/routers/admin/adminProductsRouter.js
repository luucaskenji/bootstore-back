const router = require('express').Router();
const productsController = require('../../controllers/productsController');
const productsSchemas = require('../../schemas/productsSchemas');
const authMiddleware = require('../../middlewares/auth');
const { ConflictError, NotFoundError } = require('../../errors');

router.get('/:id', authMiddleware, async (req, res) => {
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

router.get('/', authMiddleware, async (req, res) => {
    let limit = null;
    let offset = null;

    if (req.query.range) {
        const range = JSON.parse(req.query.range);
        limit = range[1] - range[0] + 1;
        offset = range[0];
    }

    try {
        const products = await productsController.getAll(limit, offset);
        const total = (await productsController.getAll()).length;

        res.set({
            'Access-Control-Expose-Headers': 'Content-Range',
            'Content-Range': `${offset}-${products.length}/${total}`
        });

        res.send(products);
    }
    catch (err) {
        res.sendStatus(500);
    }
});

//ADMIN
router.put('/:id', authMiddleware, async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const product = await productsController.editProduct(id, req.body);

        res.status(200).send(product)
    }
    catch(err) {
        if (err instanceof NotFoundError) return res.status(404).send(err.message);
        else res.sendStatus(500);
    }
});

router.delete('/:id', authMiddleware, async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        await productsController.deleteProduct(id);

        res.sendStatus(204);
    }
    catch(err) {
        if (err instanceof NotFoundError) return res.status(404).send(err.message);
        else res.sendStatus(500);
    }
});

router.post('/', authMiddleware, async (req, res) => {
    const { error } = productsSchemas.postProduct.validate(req.body);
    if (error) return res.sendStatus(422);

    try {
        const createdProduct = await productsController.createProduct(req.body);

        res.status(201).send(createdProduct);
    }
    catch(err) {
        if (err instanceof ConflictError) return res.status(409).send(err.message);
        else res.sendStatus(500);
    }
});

router.post('/:productId/categories/:categoryId', authMiddleware, async (req, res) => {
    let { productId, categoryId } = req.params;
    productId = parseInt(productId);
    categoryId = parseInt(categoryId);

    try {
        await productsController.createCategoryProduct(productId, categoryId);

        res.sendStatus(201);
    }
    catch(err) {
        if (err instanceof ConflictError) return res.status(409).send(err.message);
        else res.sendStatus(500);
    }
});

router.get('/categories', authMiddleware, async (req, res) => {
    try {
        const relations = await productsController.getCategoryProducts();

        res.status(200).send(relations);
    }
    catch (err) {
        res.sendStatus(500);
    }
});


module.exports = router;