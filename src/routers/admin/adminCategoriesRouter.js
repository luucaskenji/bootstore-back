const router = require('express').Router();

const categoriesController = require('../../controllers/categoriesController');
const categoriesSchemas = require('../../schemas/categoriesSchemas');
const authMiddleware = require('../../middlewares/auth');
const { ConflictError, NotFoundError } = require('../../errors');

router.post('/', authMiddleware, async (req, res) => {
    const { error } = categoriesSchemas.categoryName.validate(req.body);
    if (error) return res.sendStatus(422);

    const { name } = req.body;

    try {
        const createdCategory = await categoriesController.createCategory(name);

        res.status(201).send(createdCategory);
    }
    catch(err) {
        console.log(err);
        if (err instanceof ConflictError) return res.status(409).send(err.message);
        else res.sendStatus(500);
    }
});

router.get('/', authMiddleware, async (req, res) => {
    let limit = null;
    let offset = null;

    if(req.query.range){
        const range = JSON.parse(req.query.range);
        limit = range[1] - range[0] + 1;
        offset = range[0];
    }
    
    try {
        const categories = await categoriesController.getAll(limit,offset)
        const total = (await categoriesController.getAll()).length;
        res.set({
            'Access-Control-Expose-Headers': 'Content-Range',
            'Content-Range': `${offset}-${categories.length}/${total}`
        });
        res.send(categories);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.put('/:id', authMiddleware, async (req, res) => {
    const { error } = categoriesSchemas.categoryName.validate(req.body);
    if (error) return res.sendStatus(422);

    let { id } = req.params;
    id = parseInt(id);
    const { name } = req.body;

    try {
        res.status(200).send(await categoriesController.editCategory(id, name));
    }
    catch(err) {
        if (err instanceof NotFoundError) return res.status(404).send(err.message);
        else res.sendStatus(500);
    }
});

router.delete('/:id', authMiddleware, async (req, res) => {
    let { id } = req.params;
    id = parseInt(id);

    try {
        await categoriesController.deleteCategory(id);
        res.sendStatus(204);
    }
    catch(err) {
        console.error(err);
        if (err instanceof NotFoundError) return res.status(404).send(err.message);
        else res.sendStatus(500);
    }
});

module.exports = router;     




















