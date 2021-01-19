require('dotenv').config();
require('./utils/loadRelationships');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const categoriesRouter = require('./routers/categoriesRouter');

app.use('/categories', categoriesRouter);

module.exports = app;
