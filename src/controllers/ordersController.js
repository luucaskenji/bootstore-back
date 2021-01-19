const Order = require("../models/Order");
const OrderProduct = require("../models/OrderProducts");
const Product = require("../models/Product");

class OrderController {
    async createOrder(orderData) {
        const { userId, products } = orderData;

    }

    getAll() {
        return Order.findAll({
            include: [{
                model: Product,
                through: {
                    attributes: []
                }
            }]
        });
    }

    async getOrderById(id) {
        const order = await Order.findByPk(id);
        if (!order) throw new NotFoundError('Order not found');

        return order;
    }

    async deleteOrder(id) {
        const order = await Order.findByPk(id);
        if (!order) throw new NotFoundError('Order not found');

        await order.destroy();
    }
}

module.exports = new OrderController();