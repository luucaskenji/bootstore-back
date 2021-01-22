const Joi = require('joi');

const identityData = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    cpf: Joi.string().pattern(/^[0-9]{3}.*[0-9]{3}.*[0-9]{3}-*[0-9]{2}$/).required()
});

const addressdata = Joi.object({
    cep: Joi.string().pattern(/^\d{5}\-\d{3}$/).required(),
    streetName: Joi.string().required(),
    streetNumber: Joi.string().required(),
    neighbourhood: Joi.string().required(),
    complement: Joi.string(),
    state: Joi
        .string()
        .pattern(/^[A-Z]{2}$/)
        .valid(
            'AC',
            'AL',
            'AM',
            'AP',
            'BA',
            'CE',
            'DF',
            'ES',
            'GO',
            'MA',
            'MT',
            'MS',
            'MG',
            'PA',
            'PB',
            'PE',
            'PI',
            'RJ',
            'RN',
            'RS',
            'RO',
            'RR',
            'SC',
            'SP',
            'SE',
            'TO'
        )
        .required(),
    city: Joi.string().required()
});

const adminSignIn = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
});

const creditCard = Joi.object({
    cardName: Joi.string().required(),
    cardNumber: Joi.string().pattern(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/).required(),
    cvv: Joi.string().pattern(/^\d{3}$/)
});

module.exports = { identityData, adminSignIn, addressdata, creditCard };