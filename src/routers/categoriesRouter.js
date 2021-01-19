const router = require('express').Router();

const categoriesController = require('../controllers/categoriesController');
const categoriesSchemas = require('../schemas/categoriesSchemas');
const { ConflictError, NotFoundError } = require('../errors');

router.get('/', async (req, res) => {
    try {
        res.set({
            'Access-Control-Expose-Headers': 'Content-Range',
            'Content-Range': 10
        });

        res.status(200).send(await categoriesController.getAll());
    }
    catch {
        res.sendStatus(500);
    }
});



module.exports = router;