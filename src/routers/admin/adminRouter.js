const router = require('express').Router();

const adminProductsRouter = require('./adminProductsRouter');
const adminCategoriesRouter = require('./adminCategoriesRouter');
const adminCategoryProductsRouter = require('./adminCategoryProductsRouter');

router.use('/products', adminProductsRouter);
router.use('/categories', adminCategoriesRouter);
router.use('/categoryProducts', adminCategoryProductsRouter)


module.exports = router;