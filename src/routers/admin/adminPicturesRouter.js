const router = require('express').Router();
const picturesController = require('../../controllers/picturesController');
const authMiddleware = require('../../middlewares/auth');

router.post('/', authMiddleware, async (req, res) => {
    const { productId, url } = req.body;

    try {
        const picture = await picturesController.createPicture(productId, url);

        res.status(200).send(picture);
    }
    catch(err) {
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
        const pictures = await picturesController.getAll(limit,offset)
        const total = (await picturesController.getAll()).length;

        res.set({
            'Access-Control-Expose-Headers': 'Content-Range',
            'Content-Range': `${offset}-${pictures.length}/${total}`
        });
        
        res.status(200).send(pictures);
    }
    catch(err) {
        res.sendStatus(500);
    }
});


router.delete('/:id', authMiddleware, async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        await picturesController.deletePicture(id);
        res.sendStatus(204);
    }
    catch(err) {
        res.sendStatus(500);
    }
});



module.exports = router;