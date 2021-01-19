const router = require('express').Router();
const productsController = require('../../controllers/productsController');
const productsSchemas = require('../../schemas/productsSchemas');
const { ConflictError, NotFoundError } = require('../../errors');
const Category = require('../../models/Category');

router.post('/', async (req,res) => {
    let {productId, categoryId} = req.body;
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

 router.get('/', async (req, res) => {
     try {
        res.set({
            'Access-Control-Expose-Headers': 'Content-Range',
            'Content-Range': 10
        });
         const relations = await productsController.getCategoryProducts();
         res.status(200).send(relations);
     }
     catch (err) {
         console.log(err);
         res.sendStatus(500);
     }
 });

 router.delete('/:id', async (req, res) => {
    try {
        await productsController.deleteCategoryProduct(req.params.id);
        res.status(200);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});


module.exports = router;