const router = require('express').Router();

const adminProductsRouter = require('./adminProductsRouter');
const adminCategoriesRouter = require('./adminCategoriesRouter');
const adminCategoryProductsRouter = require('./adminCategoryProductsRouter');
const adminUsersRouter = require('./adminUsersRouter');

router.use('/products', adminProductsRouter);
router.use('/categories', adminCategoriesRouter);
router.use('/categoryProducts', adminCategoryProductsRouter);
router.use('/users', adminUsersRouter);


module.exports = router;