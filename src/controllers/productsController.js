const Product = require('../models/Product');
const { ConflictError, NotFoundError } = require('../errors');

class ProductController {
    async createProduct(name) {
        const [product, hasBeenCreated] = await Product.findOrCreate({ where: { name } });
        if (!hasBeenCreated) throw new ConflictError('Product already exists');

        return product;
    }

    getAll() {
        return Product.findAll();
    }

    async editProduct(id, name) {
        const product = await Product.findByPk(id);
        if (!Product) throw new NotFoundError('Product not found');
        
        product.name = name;
        await Product.save();

        return product;
    }

    async deleteProduct(id) {
        const product = await Product.findByPk(id);
        if(!product) throw new NotFoundError('Product not found');

        await Product.destroy();
    }
}

module.exports = new ProductController();