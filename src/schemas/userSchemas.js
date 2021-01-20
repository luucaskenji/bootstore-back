const Joi = require('joi');

const identityData = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    cpf: Joi.string().pattern(/^[0-9]{3}.*[0-9]{3}.*[0-9]{3}-*[0-9]{2}$/).required()
});

const adminSignIn = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

module.exports = { identityData, adminSignIn };