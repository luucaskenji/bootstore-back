const router = require('express').Router();
const productsController = require('../../controllers/productsController');
const authMiddleware = require('../../middlewares/auth');
const productsSchemas = require('../../schemas/productsSchemas');
const { ConflictError } = require('../../errors');

router.post('/', authMiddleware, async (req,res) => {
    let { productId, categoryId } = req.body;
    productId = parseInt(productId);
    categoryId = parseInt(categoryId);

    try {
        await productsController.createCategoryProduct(productId,categoryId);

        res.sendStatus(200);
    }
    catch(err) {
        if (err instanceof ConflictError) res.status(409).send(err.message);
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
        const relations = await productsController.getCategoryProducts(limit,offset);
        const total = (await productsController.getCategoryProducts()).length;

        res.set({
            'Access-Control-Expose-Headers': 'Content-Range',
            'Content-Range': `${offset}-${relations.length}/${total}`
        });

        res.status(200).send(relations);
    }
    catch(err) {
        res.sendStatus(500);
    }
 });

router.delete('/:id', authMiddleware, async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        await productsController.deleteCategoryProduct(id);
        
        res.status(204);
    }
    catch(err) {
        res.sendStatus(500);
    }
});


module.exports = router;