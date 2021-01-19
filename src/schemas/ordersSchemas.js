const Joi = require('joi');

const postOrder = Joi.object({
    userId: Joi.number().required(),
    products: Joi.array().required()
});

module.exports = { postOrder };