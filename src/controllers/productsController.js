const Product = require('../models/Product');
const { ConflictError, NotFoundError } = require('../errors');
const CategoryProduct = require('../models/CategoryProduct');
const Category = require('../models/Category');
const OrderProduct = require('../models/OrderProducts');
const Order = require('../models/Order');
const { Sequelize, Op } = require('sequelize');

class ProductController {
    async createProduct(productData) {
        console.log(productData);
        const product = await Product.create(productData);
        //if (!hasBeenCreated) throw new ConflictError('Product already exists');

        return product;
    }

    getAll() {
        return Product.findAll({
            include: [{
                model: Category,
                attributes: ['id', 'name'],
                through: {
                    attributes: []
                }
            }]
        });
    }

    async getProductById(id) {
        const product = await Product.findByPk(id);
        if (!product) throw new NotFoundError('Product not found');

        return product;
    }

    async editProduct(id, productData) {
        const { name, price, description, units, mainPicture } = productData;
        const product = await Product.findByPk(id);
        console.log(product);
        if (!product) throw new NotFoundError('Product not found');

        if (name) {
            product.name = name;
        }
        if (price) {
            product.price = price;
        }
        if (description) {
            product.description = description;
        }
        if (units) {
            product.units = units;
        }
        if (mainPicture) {
            product.mainPicture = mainPicture;
        }

        await product.save();

        return product;
    }

    async deleteProduct(id) {
        const product = await Product.findByPk(id);
        if (!product) throw new NotFoundError('Product not found');

        await product.destroy();
    }

    async createCategoryProduct(productId, categoryId) {
        const product = await Product.findByPk(productId);
        if (!product) throw new NotFoundError('Product not found');

        const category = await Category.findByPk(categoryId);
        if (!category) throw new NotFoundError('Category not found');

        const categoryProduct = await CategoryProduct.findOne({ where: { productId, categoryId } });
        if (categoryProduct) {
            throw new ConflictError('Relation already exists');
        }

        await CategoryProduct.create({ productId, categoryId });
    }

    getCategoryProducts(){
        return CategoryProduct.findAll();
    }

    async getTopSellers() {
        let topSellers;

        const orders = await OrderProduct.findAll({
            group: ['productId'],
            attributes: ['productId', [Sequelize.fn('COUNT', Sequelize.col('"productId"')), 'orderQuantity']],
            order: [[Sequelize.literal('"orderQuantity"'), 'DESC']]
        });

        if (orders.length === 0) {
            topSellers = await Product.findAll({
                order: [Sequelize.fn('RANDOM')],
                limit: 5
            });
        }
        else if (orders.length < 5) {
            topSellers = await Product.findAll({
                where: { id: [...orders.map(o => o.productId)] },
                attributes: ['id', 'name', 'price', 'mainPicture']
            });

            const complement = await Product.findAll({
                where: {
                    [Op.not]: [{ id: orders.map(o => o.productId) }]
                },
                order: [Sequelize.fn('RANDOM')],
                attributes: ['id', 'name', 'price', 'mainPicture'],
                limit: 5 - orders.length
            });

            topSellers = [...topSellers, ...complement];
        }
        else {
            topSellers = await Product.findAll({
                where: { id: orders.map(o => o.productId) },
                attributes: ['id', 'name', 'price', 'mainPicture']
            });
        }

        return topSellers;
    }
}

module.exports = new ProductController();