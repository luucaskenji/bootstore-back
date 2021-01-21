const router = require('express').Router();

const categoriesController = require('../controllers/categoriesController');
const categoriesSchemas = require('../schemas/categoriesSchemas');

router.get('/', async (req, res) => {    
    try {
        const categories = await categoriesController.getAll();

        res.set({
            'Access-Control-Expose-Headers': 'Content-Range',
            'Content-Range': 10
        });

        res.status(200).send(categories);
    }
    catch {
        res.sendStatus(500);
    }
});



module.exports = router;