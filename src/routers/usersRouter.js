const router = require('express').Router();

const userSchemas = require('../schemas/userSchemas');

router.post('/', (req, res) => {
    const { error } = userSchemas.identityData.validate(req.body);
    if (error) return res.sendStatus(422);

    res.sendStatus(201);
});

module.exports = router;