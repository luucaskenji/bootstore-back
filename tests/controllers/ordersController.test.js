require('dotenv').config();
const ordersController = require('../../src/controllers/ordersController');
const { NotFoundError } = require ('../../src/errors/ConflictError.js');

jest.mock('../../src/models/Order.js');
jest.mock('../../src/models/OrderProducts.js');

describe('Testing createOrder of ordersController', () => {

    it('createOrder - Should return a object with the ORder include products.', async () => {
        
        const Order = require('../../src/models/Order');

        Order.create.mockResolvedValue({
            "id": 1,
            "userId": 1
        });

        Order.findByPk.mockResolvedValue({
            "onderId": 1,
            "products": [
                {
                    productId: 1 ,
                    quantity: 13
                },
            ]})
            
        const orderData = {
            "userId": 1,
            "cart": [
                {
                    productId: 1 ,
                    quantity: 13
                },
            ],
            "addressId": 1
         }

        const order = await ordersController.createOrder(orderData);

        expect(order).toEqual(expect.objectContaining(
            {
                "onderId": 1,
                "products": [
                    {
                        productId: 1 ,
                        quantity: 13
                    },
    
                ] 
    
            }
        ))
    });

    it('createOrder - Should return an TypeError if receive an empty product object.', async () => {
        
        const Order = require('../../src/models/Order');

        Order.create.mockResolvedValue({
            "id": 1,
            "userId": 1
        });

        Order.findByPk.mockResolvedValue({
            "onderId": 1,
            "products": [
                {
                    productId: 1 ,
                    quantity: 13
                },
            ]})

        const orderData = {};

        try {
            await ordersController.createOrder(orderData);
        } catch (error) {
            expect(error).toBeInstanceOf(TypeError);
           
            expect(error).toHaveProperty('message', "Cannot read property 'forEach' of undefined");
        }

    });

});

describe('Testing getOrderById of ordersController', () => {

    it('getOrderById - Should return a throw error if the order does not exist.', async () => {

        const Order = require('../../src/models/Order');
        Order.findByPk.mockResolvedValue(null);

            
        async function order() {
            return await ordersController.getOrderById(99)
        }    
        
        expect(order).rejects.toThrow(NotFoundError);
    });

    it('getOrderById - should return an object of the order found.', async () => {
        
        const Order = require('../../src/models/Order');
        Order.findByPk.mockResolvedValue({
            "onderId": 1,
            "products": [
                {
                    productId: 1 ,
                    quantity: 13
                },
            ]});
        

        
        const orderById = await ordersController.getOrderById(99)
        
        expect(orderById).toEqual(expect.objectContaining({
            "onderId": 1,
            "products": [
                {
                    productId: 1 ,
                    quantity: 13
                },
            ]
        }));
        
    })

});

describe('Testing deleteOrder of ordersController', () => {

    it('deleteOrder - should return a throw error if the order does not exist.', async () => {
        const Order = require('../../src/models/Order');
        Order.findByPk.mockResolvedValue(null);

        async function order() {
            return await ordersController.deleteOrder(99) 
        }

        expect(order).rejects.toThrow(NotFoundError)
    });

    it('deleteOrder - Should return undefined if order was successfully deleted', async () => {

        const Order = require('../../src/models/Order');
        Order.findByPk.mockResolvedValue({
            "onderId": 1,
            "products": [
                {
                    productId: 1 ,
                    quantity: 13
                },
            ],
            destroy: async () => Promise.resolve()
        });

        const OrderProducts = require('../../src/models/OrderProducts');
        OrderProducts.destroy.mockResolvedValue({
            "id": 1,
            "quantity": 3,
            "orderId": 1,
            "productId": 4,
            destroy: async () => Promise.resolve()
        });

        const order = await ordersController.deleteOrder(1);
        
        expect(order).toBe(undefined)
    })
});