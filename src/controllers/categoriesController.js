const Category = require('../models/Category');
const productController = require('./productsController');
const { ConflictError, NotFoundError } = require('../errors');
const CategoryProduct = require('../models/CategoryProduct');

class CategoriesController {
    async createCategory(name) {
  
        const category = await Category.findOne({ where: { name } });
        if (category !== null) throw new ConflictError('Category already exists');

        const createdCategory = await Category.create({ name });
        
        return createdCategory;

    }

    getAll(limit = null, offset = null) {
        return Category.findAll({limit,offset});
    }

    async editCategory(id, name) {
        const category = await Category.findByPk(id);
        if (!category) throw new NotFoundError('Category not found');
        
        category.name = name;
        await category.save();
        return category;
    }

    async deleteCategory(id) {
        const category = await Category.findByPk(id);
        if(!category) throw new NotFoundError('Category not found');
        
        await category.destroy();
    }
}

module.exports = new CategoriesController();