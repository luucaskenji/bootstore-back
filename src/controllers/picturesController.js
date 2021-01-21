const { ConflictError, NotFoundError } = require('../errors');
const Picture = require('../models/Picture');

class PictureController {

    async createPicture(pictureId, url) {
        const picture = await Picture.findOne({ where: { pictureId, url } });
        if (picture) {
            throw new ConflictError('Picture already exists');
        }

        return await Picture.create({ pictureId, url });
    }

    async getAll(limit = null, offset = null) {
        return await Picture.findAll({limit,offset});
    }

    async deletePicture(id) {
        const picture = await Picture.findOne({ where: { id } });
        if (!picture) {
            throw new NotFoundError('Relation not found');
        }
        await picture.destroy();
    }
}

module.exports = new PictureController();