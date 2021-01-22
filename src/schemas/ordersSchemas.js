const Joi = require('joi');

const postOrder = Joi.object({
    userId: Joi.number().required(),
    cart: Joi.array().required(),
    addressId: Joi.number().required(),
    paymentMethod: Joi.string().valid('credit card', 'bank slip').required(),
    cardName: Joi.alternatives().conditional('paymentMethod', [{
        is: 'credit card', then: Joi.string().required()
    }]),
    cardNumber: Joi.alternatives().conditional('paymentMethod', [{
      is: 'credit card', then: Joi.string().pattern(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/).required()
    }]),
    expiration: Joi.alternatives().conditional('paymentMethod', [{
        is: 'credit card', then: Joi.string().pattern(/^[0-12]{2}\/\d{2}$/).required()
    }]),
    cvv: Joi.alternatives().conditional('paymentMethod', [{
        is: 'credit card', then: Joi.string().pattern(/^\d{3}$/).required()
    }])
});

module.exports = { postOrder };