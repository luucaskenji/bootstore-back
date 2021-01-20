const router = require('express').Router();

const userSchemas = require('../../schemas/userSchemas');
const usersController = require('../../controllers/usersController');
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
    const { email, password } = req.body;
    
    try {        
        res.status(201).send(await usersController.postAdminSignIn(email, password));
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

router.get('/', async (req, res) => {
    try {
        res.set({
            'Access-Control-Expose-Headers': 'Content-Range',
            'Content-Range': 10
        });
        res.status(200).send(await usersController.getAll());
    }
    catch {
        res.sendStatus(500);
    }
});

router.get('/:id', async (req, res) => {
    try {
        res.status(200).send(await usersController.getUserById(req.params.id));
    }
    catch {
        res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {
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