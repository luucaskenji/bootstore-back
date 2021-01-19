const Product = require('../models/Product');
const { ConflictError, NotFoundError } = require('../errors');

class ProductController {
    async createProduct(productData) {
        console.log(productData);
        const product = await Product.create(productData);
        //if (!hasBeenCreated) throw new ConflictError('Product already exists');

        return product;
    }

    getAll() {
        return Product.findAll();
    }

    async getProductById(id){
        const product = await Product.findByPk(id);
        if (!product) throw new NotFoundError('Product not found');

        return product;
    }

    async editProduct(id,productData) {
        const {name,price,description,units,mainPicture} = productData;
        const product = await Product.findByPk(id);
        console.log(product);
        if (!product) throw new NotFoundError('Product not found');

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

        await product.save();

        return product;
    }

    async deleteProduct(id) {
        const product = await Product.findByPk(id);
        if(!product) throw new NotFoundError('Product not found');

        await product.destroy();
    }
}

module.exports = new ProductController();