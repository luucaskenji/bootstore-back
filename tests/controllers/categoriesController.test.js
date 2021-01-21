require('dotenv').config();
const categoriesController = require('../../src/controllers/categoriesController');
const ConflictError = require ('../../src/errors/ConflictError');
const NotFoundError = require ('../../src/errors/NotFoundError');


jest.mock('../../src/models/Category.js');

describe('Testing createCategory of categoriesController', () => {
    it('createCategory - should return an throw error trying to create a category that already exists.', async () => {
        
        const Category = require('../../src/models/Category');

        Category.findOne.mockResolvedValue({
            "id": 1,
            "name": "Incenso"});

        async function category() {
            return await categoriesController.createCategory("Incenso")
        }

        expect(category).rejects.toThrow(ConflictError)
    }),

    it('createCategory - should return an object of the created category.', async () => {
        
        const Category = require('../../src/models/Category');

        Category.findOne.mockResolvedValue(null);
        Category.create.mockResolvedValue({
            "id": 2,
            "name": "Meditação"
        });

        const category = await categoriesController.createCategory("Meditação");
        
        expect(category).toEqual(expect.objectContaining({
                "id": 2,
                "name": "Meditação"
        }))
        
    })
});

describe('Testing editCategory of categoriesController', () => {

    it('editCategory - should return a throw error if the category does not exist.', async () => {
        
        const Category = require('../../src/models/Category');

        Category.findByPk.mockResolvedValue(null);

        async function category() {
            return await categoriesController.editCategory(99, 'Insensos') 
        }

        expect(category).rejects.toThrow(NotFoundError)
    });

    it('editCategory - Should return an object with the category already edited', async () => {

        const Category = require('../../src/models/Category');

        Category.findByPk.mockResolvedValue({
            "id": 1,
            "name": "Incenso",
            save: async () => Promise.resolve()
        });

        const category = await categoriesController.editCategory(1, 'Insensos');
        
        expect(category).toEqual(expect.objectContaining({
            "id": 1,
            "name": 'Insensos'
        }))
    })
    
});

describe('Testing deleteCategory of categoriesController', () => {

    it('deleteCategory - should return a throw error if the category does not exist.', async () => {
        const Category = require('../../src/models/Category');

        Category.findByPk.mockResolvedValue(null);

        async function category() {
            return await categoriesController.deleteCategory(99) 
        }

        expect(category).rejects.toThrow(NotFoundError)
    });

    it('deleteCategory - Should return undefined if category was successfully deleted', async () => {

        const Category = require('../../src/models/Category');

        Category.findByPk.mockResolvedValue({
            "id": 1,
            "name": "Incenso",
            destroy: async () => Promise.resolve()
        });

        const category = await categoriesController.deleteCategory(1);
        
        expect(category).toBe(undefined)
    })
});