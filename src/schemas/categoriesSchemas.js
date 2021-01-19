const joi = require('joi');

const categoryName = joi.object({
    name: joi.string().min(1).required()
});

module.exports = { categoryName };