const Product = require('../models/Product');
const { ConflictError, NotFoundError } = require('../errors');
const CategoryProduct = require('../models/CategoryProduct');
const Category = require('../models/Category');
const OrderProduct = require('../models/OrderProducts');
const { Sequelize, Op } = require('sequelize');
const Picture = require('../models/Picture');

class ProductController {
    async createProduct(productData) {
        
        const { name } = productData;
        const findProduct = await Product.findOne({where: {name}});
        if (findProduct !== null) throw new ConflictError('Product already exists');

        const product = await Product.create(productData);

        return product;
    }

    getAll(limit = null, offset = null) {
        return Product.findAll({
            limit,
            offset,
            include: [
                {
                    model: Category,
                    attributes: ['id', 'name'],
                    through: {
                        attributes: []
                    }
                }
                ,
                {
                    model: Picture
                }
            ]
        });
    }

    async getProductById(id) {
        const product = await Product.findByPk(id, {
            include: [
                {
                    model: Category,
                    attributes: ['id', 'name'],
                    through: {
                        attributes: []
                    }
                }
                ,
                {
                    model: Picture
                }
            ]
        });
        if (!product) throw new NotFoundError('Product not found');

        return product;
    }

    async editProduct(id, productData) {
        const { name, price, description, units, mainPicture } = productData;
        const product = await Product.findByPk(id);

        if (product === null) throw new NotFoundError('Product not found');

        if (name !== undefined) {
            product.name = name;
        }
        if (price !== undefined) {
            product.price = price;
        }
        if (description !== undefined) {
            product.description = description;
        }
        if (units !== undefined) {
            product.units = units;
        }
        if (mainPicture !== undefined) {
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

    async deleteCategoryProduct(id) {
        const categoryProduct = await CategoryProduct.findOne({ where: { id } });
        if (!categoryProduct) {
            throw new NotFoundError('Relation not found');
        }
        await categoryProduct.destroy();
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
    getCategoryProducts(limit = null, offset = null) {
        return CategoryProduct.findAll({ limit, offset });
    }

}

module.exports = new ProductController();