require('dotenv').config();
const picturesController = require('../../src/controllers/picturesController');
const ConflictError = require ('../../src/errors/ConflictError');
const NotFoundError = require ('../../src/errors/NotFoundError');

jest.mock('../../src/models/Picture.js');

describe('Testing createPicture of categoriesController', () => {

    it('createPicture - should return a throw error trying to create a picture that already exists.', async () => {
        
        const Picture = require('../../src/models/Picture');

        Picture.findOne.mockResolvedValue([{
            "id": 1,
            "productId": 1,
            "url": "https://d17e8p84ng9nyb.com"
        }]);

        async function picture() {
            return await picturesController.createPicture(1, "https://d17e8p84ng9nyb.com")
        }

        expect(picture).rejects.toThrow(ConflictError)
    });

    it('createPicture - should return an object with the picture if that was successfully criated.', async () => {
        
        const Picture = require('../../src/models/Picture');

        Picture.findOne.mockResolvedValue(null);

        Picture.create.mockResolvedValue({
            "id": 1,
            "productId": 1,
            "url": "https://d17e8p84ng9nyb.com"
        });
        
        const picture = await picturesController.createPicture(1, "https://d17e8p84ng9nyb.com")
       
        expect(picture).toEqual(expect.objectContaining({
            "id": 1,
            "productId": 1,
            "url": "https://d17e8p84ng9nyb.com"
        }));
    })

});

describe('Testing deletePicture of categoriesController', () => {

    it('deletePicture - should return a throw error trying find a picture does not exists.', async () => {

        const Picture = require('../../src/models/Picture');

        Picture.findOne.mockResolvedValue(null);

        async function picture() {
            return await picturesController.deletePicture(1);
        }

        expect(picture).rejects.toThrow(NotFoundError)
      
    });

    it('deletePicture - Should return undefined if category was successfully deleted', async () => {

        const Picture = require('../../src/models/Picture');

        Picture.findOne.mockResolvedValue({
            "id": 1,
            "productId": 1,
            "url": "https://d17e8p84ng9nyb.com",
            destroy: async () => Promise.resolve()
        });

           
        const picture = await picturesController.deletePicture(1);
        
        expect(picture).toBe(undefined);
      
    });

});