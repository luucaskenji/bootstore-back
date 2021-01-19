const router = require('express').Router();

const categoriesController = require('../controllers/categoriesController');
const { ConflictError } = require('../errors');

router.post('/', async (req, res) => {
    const { name } = req.body;

    // validar req.body

    try {
        const createdCategory = await categoriesController.createCategory(name);

        res.status(201).send(createdCategory);
    }
    catch(err) {
        if (err instanceof ConflictError) return res.status(409).send(err.message);
        else res.sendStatus(500);
    }
});

router.get('/', async (req, res) => {
    try {
        res.status(200).send(await categoriesController.getAll());
    }
    catch(err) {
        res.sendStatus(500);
    }
});

module.exports = router;