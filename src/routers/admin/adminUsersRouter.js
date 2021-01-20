const router = require('express').Router();

const userSchemas = require('../../schemas/userSchemas');
const usersController = require('../../controllers/usersController');
const authMiddleware = require('../../middlewares/auth');
const { ConflictError, NotFoundError, AuthError } = require('../../errors');

router.post('/', async (req, res) => {
    const { error } = userSchemas.identityData.validate(req.body);
    if (error) return res.sendStatus(422);

    try {
        res.status(201).send(await usersController.createUser(req.body));
    }
    catch(err) {
        if (err instanceof ConflictError) res.status(409).send(err.message);
        else res.sendStatus(500);
    }
});

router.post('/sign-in', async (req, res) => {
    const { error } = userSchemas.adminSignIn.validate(req.body);
    if (error) return res.sendStatus(422);

    const { username, password } = req.body;

    try {        
        res.status(201).send(await usersController.postAdminSignIn(username, password));
    }
    catch(err) {
        if (err instanceof AuthError) res.status(403).send(err.message);
        else res.sendStatus(500);
    }
});

router.post('/sign-out', async (req, res) => {    
    try {        
        res.status(204).send(await usersController.postAdminSignOut());
    }
    catch {
        res.sendStatus(500);
    }
});

router.get('/', authMiddleware, async (req, res) => {
    let limit = null;
    let offset = null;

    if (req.query.range) {
        const range = JSON.parse(req.query.range);
        limit = range[1] - range[0] + 1;
        offset = range[0];
    }

    try {
        const users = await usersController.getAll(limit,offset)
        const total = (await usersController.getAll()).length;
        res.set({
            'Access-Control-Expose-Headers': 'Content-Range',
            'Content-Range': `${offset}-${users.length}/${total}`
        });
        res.send(users);
    }
    catch(err) {
        res.sendStatus(500);
    }
});

router.get('/:id', authMiddleware, async (req, res) => {
    try {
        res.status(200).send(await usersController.getUserById(req.params.id));
    }
    catch {
        res.sendStatus(500);
    }
});

router.delete('/:id', authMiddleware, async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        res.status(204).send(await usersController.deleteUser(id));
    }
    catch(err) {
        if (err instanceof NotFoundError) res.status(404).send(err.message);
        else res.sendStatus(500);
    }
});

module.exports = router;