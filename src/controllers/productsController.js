const Product = require('../models/Product');
const { ConflictError, NotFoundError } = require('../errors');

class ProductController {
    async createProduct(productData) {
        const [product, hasBeenCreated] = await Product.findOrCreate({ where: productData } );
        if (!hasBeenCreated) throw new ConflictError('Product already exists');

        return product;
    }

    getAll() {
        return Product.findAll();
    }

    async editProduct(productData) {
        const {id,name,price,description,units,mainPicture} = productData;
        const product = await Product.findByPk(id);
        if (!Product) throw new NotFoundError('Product not found');

        if(name){
            product.name = name;
        }
        if(price){
            product.price = price;
        }
        if(description){
            product.description = description;
        }
        if(units){
            product.units = units;
        }
        if(mainPicture){
            product.mainPicture = mainPicture;
        }

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