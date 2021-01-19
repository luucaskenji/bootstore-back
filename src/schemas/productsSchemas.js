const joi = require('joi');

const postProduct = joi.object({
    name: joi.string().min(1).required(),
    price: joi.number().min(0).required(),
    description: joi.string().min(10),
    units: joi.number().min(0),
    mainPicture: joi.string().uri()
});

module.exports = { postProduct };