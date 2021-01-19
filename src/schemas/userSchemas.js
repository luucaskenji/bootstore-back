const Joi = require('joi');

const identityData = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    cpf: Joi.string().pattern(/^[0-9]{3}.*[0-9]{3}.*[0-9]{3}-*[0-9]{2}$/).required()
});

module.exports = { identityData };