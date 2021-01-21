const router = require('express').Router();
const productsController = require('../../controllers/productsController');
const productsSchemas = require('../../schemas/productsSchemas');
const authMiddleware = require('../../middlewares/auth');
const { ConflictError, NotFoundError } = require('../../errors');
const Category = require('../../models/Category');

router.post('/', async (req, res) => {
    const {productId,url} = req.body;
    try {
        const picture = await productsController.addPicture(productId, url);
        res.status(200).send(picture);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});


router.get('/pictures', async (req, res) => {
    let limit = null;
    let offset = null;

    if (req.query.range) {
        const range = JSON.parse(req.query.range);
        limit = range[1] - range[0] + 1;
        offset = range[0];
    }

    try {
        const pictures = await productsController.getPictures(limit,offset)
        const total = (await productsController.getPictures()).length;
        res.set({
            'Access-Control-Expose-Headers': 'Content-Range',
            'Content-Range': `${offset}-${relations.length}/${total}`
        });
        console.log(pictures);
        res.status(200).send(pictures);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});



module.exports = router;