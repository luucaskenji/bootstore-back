const Category = require('../models/Category');
const { ConflictError, NotFoundError } = require('../errors');

class CategoryController {
    async createCategory(name) {
        const [category, hasBeenCreated] = await Category.findOrCreate({ where: { name } });
        if (!hasBeenCreated) throw new ConflictError('Category already exists');

        return category;
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
}

module.exports = new CategoryController();