const router = require('express').Router();

const userSchemas = require('../../schemas/userSchemas');
const usersController = require('../../controllers/usersController');
const authMiddleware = require('../../middlewares/auth');
const { ConflictError, NotFoundError, AuthError } = require('../../errors');

router.post('/', async (req, res) => {
    const { error } = userSchemas.identityData.validate(req.body);
    if (error) return res.sendStatus(422);

    try {
        const createdUser = await usersController.createUser(req.body);

        res.status(201).send(createdUser);
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
        const newSession = await usersController.postAdminSignIn(username, password);

        res.status(201).send(newSession);
    }
    catch(err) {
        if (err instanceof AuthError) res.status(403).send(err.message);
        else res.sendStatus(500);
    }
});

router.post('/sign-out', async (req, res) => {    
    try {
        await usersController.postAdminSignOut();

        res.sendStatus(204);
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
    const id = parseInt(req.params.id);

    try {
        const user = await usersController.getUserById(req.params.id);

        res.status(200).send(user);
    }
    catch {
        res.sendStatus(500);
    }
});

router.delete('/:id', authMiddleware, async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        await usersController.deleteUser(id);
        
        res.sendStatus(204);
    }
    catch(err) {
        if (err instanceof NotFoundError) res.status(404).send(err.message);
        else res.sendStatus(500);
    }
});

module.exports = router;