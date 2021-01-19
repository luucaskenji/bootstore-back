const Joi = require('joi');

const categoryName = Joi.object({
    name: Joi.string().min(1).required()
});

module.exports = { categoryName };