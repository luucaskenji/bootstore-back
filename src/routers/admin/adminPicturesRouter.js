const router = require('express').Router();
const picturesController = require('../../controllers/picturesController');
const productsController = require('../../controllers/productsController');
const authMiddleware = require('../../middlewares/auth');

router.post('/', async (req, res) => {
    const {productId,url} = req.body;
    try {
        const picture = await picturesController.createPicture(productId, url);
        res.status(200).send(picture);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});


router.get('/', async (req, res) => {
    let limit = null;
    let offset = null;

    if (req.query.range) {
        const range = JSON.parse(req.query.range);
        limit = range[1] - range[0] + 1;
        offset = range[0];
    }

    try {
        const pictures = await picturesController.getAll(limit,offset)
        const total = (await picturesController.getAll()).length;
        res.set({
            'Access-Control-Expose-Headers': 'Content-Range',
            'Content-Range': `${offset}-${pictures.length}/${total}`
        });
        res.status(200).send(pictures);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});



module.exports = router;