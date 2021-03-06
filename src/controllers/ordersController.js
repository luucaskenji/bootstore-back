const Address = require('../models/Address');
const Order = require('../models/Order');
const OrderProduct = require('../models/OrderProducts');
const Product = require('../models/Product');
const PaymentDatas = require('../models/PaymentDatas');

class OrderController {
    async createOrder(orderData) {
        const { userId, cart, addressId, paymentMethod } = orderData;

        const order = await Order.create({ userId, addressId, status: 'payment made' });

        if(paymentMethod === 'credit card') {
            const { cardName, cardNumber, expiration, cvv } = orderData;
            await PaymentDatas.create({ paymentMethod, orderId: order.id, cardName, cardNumber, expiration, cvv });
        } else {
            await PaymentDatas.create({ paymentMethod, orderId: order.id });
        }
        
        await this._createOrderProduct(order.id, cart);

        return await Order.findByPk(order.id, { include: Product, through: OrderProduct });
    }

    async _createOrderProduct(orderId, cart) {
        cart.forEach(async (i) => {
            const { product, quantity } = i;
            await OrderProduct.create({ productId: product.id, quantity, orderId });
        });
    }

    getAll(limit = null, offset = null) {
        return Order.findAll({
            limit,
            offset,
            include: [{
                model: Product,
                through: {
                    attributes: ['quantity']
                }
            }]
        });
    }

    async getOrderById(id) {
        const order = await Order.findByPk(id, {
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'addressId']
            },
            include: [
                {
                    model: Product,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    },
                    through: {
                        attributes: []
                    }
                },
                {
                    model: Address,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'userId']
                    }
                }
            ],
            through: OrderProduct
        });
        
        if (!order) throw new NotFoundError('Order not found');

        return order;
    }

    async deleteOrder(id) {
        const order = await Order.findByPk(id);
        if (!order) throw new NotFoundError('Order not found');

        await OrderProduct.destroy({ where: { orderId: order.id } });

        await order.destroy();
    }
};

module.exports = new OrderController();