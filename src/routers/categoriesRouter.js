const router = require('express').Router();

const categoriesController = require('../controllers/categoriesController');
const { ConflictError, NotFoundError } = require('../errors');

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

router.put('/:id', async (req, res) => {
    const { name } = req.body;
    let { id } = req.params;
    id = parseInt(id);

    try {
        res.status(200).send(await categoriesController.editCategory(id, name));
    }
    catch(err) {
        if (err instanceof NotFoundError) return res.status(404).send(err.message);
        else res.sendStatus(500);
    }
});

module.exports = router;