const Product = require('../models/Product');
const { ConflictError } = require('../errors');

class ProductController {
    async createProduct(name) {
        const [Product, hasBeenCreated] = await Product.findOrCreate({ where: { name } });
        if (!hasBeenCreated) throw new ConflictError('Product already exists');

        return Product;
    }

    getAll() {
        return Product.findAll();
    }
}

module.exports = new ProductController();