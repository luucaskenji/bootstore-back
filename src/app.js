require('dotenv').config();
require('./utils/loadRelationships');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const categoriesRouter = require('./routers/categoriesRouter');
const productsRouter = require('./routers/productsRouter');
const adminRouter = require('./routers/admin/adminRouter');
app.use('/categories', categoriesRouter);
app.use('/products', productsRouter);
app.use('/admin', adminRouter);

module.exports = app;
