const Category = require('../models/Category');
const { ConflictError, NotFoundError } = require('../errors');

class CategoriesController {
    async createCategory(name) {
  
        const category = await Category.findOne({ where: { name } });
        if (category !== null) throw new ConflictError('Category already exists');

        const createdCategory = await Category.create({ name });
        
        return createdCategory;

    }

    getAll() {
        return Category.findAll();
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