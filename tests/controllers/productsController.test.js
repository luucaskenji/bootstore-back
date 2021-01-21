require('dotenv').config();
const productsController = require('../../src/controllers/productsController');
const ConflictError = require ('../../src/errors/ConflictError');
const NotFoundError = require ('../../src/errors/NotFoundError');


jest.mock('../../src/models/Product.js');
jest.mock('../../src/models/Category.js');
jest.mock('../../src/models/CategoryProduct.js');
jest.mock('../../src/models/OrderProducts.js');

describe('Testing createProduct of productsController', () => {

    it('createProduct - Should return an error throw trying to create a product that already exists.', async () => {
        
        const Product = require('../../src/models/Product');

        Product.findOne.mockResolvedValue({
            "id": 1,
            "name": "Incenso Massala Nag Champa",
            "price": 1400,
            "description": "Energia da Meditação",
            "units": 7,
            "mainPicture": "https://d17e8p84ng9nyb"

        })

        Product.create.mockResolvedValue({
            "id": 1,
            "name": "Incenso Massala Nag Champa",
            "price": 1400,
            "description": "Energia da Meditação",
            "units": 7,
            "mainPicture": "https://d17e8p84ng9nyb"

        });

    
        const productData = {
            "name": "Incenso Massala Nag Champa",
            "price": 1400,
            "description": "Energia da Meditação",
            "units": 7,
            "mainPicture": "https://d17e8p84ng9nyb"
        }

       

        async function product() {
            return await productsController.createProduct(productData);
        }

        expect(product).rejects.toThrow(ConflictError)
    });

    it('createProduct - Should return an object of the created product.', async () => {
        
        const Product = require('../../src/models/Product');

        Product.findOne.mockResolvedValue(null);
    
        Product.create.mockResolvedValue({
            "id": 2,
            "name": "Incenso Massala Ayurvédico",
            "price": 1400,
            "description": "Energia Calmante e Relaxante.",
            "units": 3,
            "mainPicture": "https://d17e8p84ng9nyb"
        });

    
        const productData = {
            "name": "Incenso Massala Ayurvédico",
            "price": 1400,
            "description": "Energia Calmante e Relaxante.",
            "units": 3,
            "mainPicture": "https://d17e8p84ng9nyb"
        }


        const product = await productsController.createProduct(productData);

        expect(product).toEqual(expect.objectContaining({
            "id": 2,
            "name": "Incenso Massala Ayurvédico",
            "price": 1400,
            "description": "Energia Calmante e Relaxante.",
            "units": 3,
            "mainPicture": "https://d17e8p84ng9nyb"
        }))
    });

});

describe('Testing getProductById of productsController', () => {

    it('getProductById - Should return a throw error if the product does not exist.', async () => {

        const Product = require('../../src/models/Product');
        Product.findByPk.mockResolvedValue(null);

            
        async function product() {
            return await productsController.getProductById(99)
        }    
        
        expect(product).rejects.toThrow(NotFoundError);
    });

    it('getProductById - should return an object of the product found.', async () => {
        
        const Product = require('../../src/models/Product');
        Product.findByPk.mockResolvedValue({
            "id": 1,
            "name": "Incenso Massala Nag Champa",
            "price": 1400,
            "description": "Energia da Meditação",
            "units": 7,
            "mainPicture": "https://d17e8p84ng9nyb"
           
        });

        
        const productById = await productsController.getProductById(1);
        
        expect(productById).toEqual(expect.objectContaining({
            "id": 1,
            "name": "Incenso Massala Nag Champa",
            "price": 1400,
            "description": "Energia da Meditação",
            "units": 7,
            "mainPicture": "https://d17e8p84ng9nyb"
        }));
        
    })

});

describe('Testing editProduct of productsController', () => {
    it('editProduct - should return an error throw if the product does not exist.', async () => {
        
        const Product = require('../../src/models/Product');
        Product.findByPk.mockResolvedValue(null);

        const productData = {
            "name": "INCENSO MassalAAa Nag Champa",
            "price": 1400,
            "description": "Energia da Meditação",
            "units": 7,
            "mainPicture": "https://d17e8p84ng9nyb"
        }

        async function product() {
            return await productsController.editProduct(99, productData);
        }

        expect(product).rejects.toThrow(NotFoundError)
    });

    it('editProduct - Should return an object with the product already edited', async () => {

        const Product = require('../../src/models/Product');
        Product.findByPk.mockResolvedValue({
            "id": 1,
            "name": "Incenso Massala Nag Champa",
            "price": 1400,
            "description": "Energia da Meditação",
            "units": 7,
            "mainPicture": "https://d17e8p84ng9nyb",
            save: async () => Promise.resolve()
           
        });
        const productData = {
            "id": 1,
            "name": "INCENSO MassalAAa Nag Champa",
            "price": 1400,
            "description": "Energia da Meditação",
            "units": 7,
            "mainPicture": "https://d17e8p84ng9nyb"
        }
        const product = await productsController.editProduct(1, productData);
        
        expect(product).toEqual(expect.objectContaining({
            "id": 1,
            "name": "INCENSO MassalAAa Nag Champa",
            "price": 1400,
            "description": "Energia da Meditação",
            "units": 7,
            "mainPicture": "https://d17e8p84ng9nyb"
        }))
    })

});

describe('Testing deleteProduct of procutsController', () => {

    it('deleteProduct - should return a throw error if the product does not exist.', async () => {
        const Product = require('../../src/models/Product');
        Product.findByPk.mockResolvedValue(null);

        async function product() {
            return await productsController.deleteProduct(99) 
        }

        expect(product).rejects.toThrow(NotFoundError)
    });

    it('deleteCategory - Should return undefined if category was successfully deleted', async () => {

        const Product = require('../../src/models/Product');
        Product.findByPk.mockResolvedValue({
            "id": 1,
            "name": "Incenso Massala Nag Champa",
            "price": 1400,
            "description": "Energia da Meditação",
            "units": 7,
            "mainPicture": "https://d17e8p84ng9nyb",
            destroy: async () => Promise.resolve()
           
        });

        const product = await productsController.deleteProduct(1) ;
        
        expect(product).toBe(undefined)
    })
});

describe('Testing createCategoryProduct of productsController', () => {

    it('createCategoryProduct - Should return an throw error trying to create a category product for products does not exists.', async () => {
        
        const Product = require('../../src/models/Product');

        Product.findByPk.mockResolvedValue(null)

     
        async function product() {
            return await productsController.createCategoryProduct(99, 76);
        }

        expect(product).rejects.toThrow(NotFoundError)
    });

    it('createCategoryProduct - Should return an throw error trying to create a category product with a category does not exists.', async () => {
        
        const Category = require('../../src/models/Category');

        Category.findByPk.mockResolvedValue(null);

     
        async function product() {
            return await productsController.createCategoryProduct(33, 33);
        }

        expect(product).rejects.toThrow(NotFoundError)
    });

    it('createCategoryProduct - Should return an throw error trying to create relation already exists.', async () => {
       
        const CategoryProduct = require('../../src/models/CategoryProduct');

        CategoryProduct.findOne.mockResolvedValue({
            "id": 1,
            "productId": 1,
            "categoryId": 2
        });

     
        async function product() {
            return await productsController.createCategoryProduct(1, 2);
        }

        expect(product).rejects.toThrow(ConflictError)
    });

    it('createCategoryProduct - Should return undefined if CategoryProduct was successfully created.', async () => {

        const Product = require('../../src/models/Product');
        Product.findByPk.mockResolvedValue({
            "id": 1,
            "name": "Incenso Massala Nag Champa",
            "price": 1400,
            "description": "Energia da Meditação",
            "units": 7,
            "mainPicture": "https://d17e8p84ng9nyb"
           
        });

        const Category = require('../../src/models/Category');

        Category.findByPk.mockResolvedValue({
             "id": 1,
             "name": "Incenso"
        });

        const CategoryProduct = require('../../src/models/CategoryProduct');

        CategoryProduct.findOne.mockResolvedValue(null);

        CategoryProduct.create.mockResolvedValue({
            "id": 1,
            "productId": 1,
            "categoryId": 1
        });

        const categoryProduct = await productsController.createCategoryProduct(1, 1);

        expect(categoryProduct).toBe(undefined)

    });

    describe('Testing deleteCategoryProduct of productsController', () => {

        it('deleteCategoryProduct - should return a throw error if the relations does not exist.', async () => {
            
            const CategoryProduct = require('../../src/models/CategoryProduct');

            CategoryProduct.findOne.mockResolvedValue(null);
    
            async function categoryProduct() {
                return await productsController.deleteCategoryProduct(1);
            }
    
            expect(categoryProduct).rejects.toThrow(NotFoundError)
        });
    
        it('deleteCategory - Should return undefined if relation was successfully deleted', async () => {
    
            const CategoryProduct = require('../../src/models/CategoryProduct');

            CategoryProduct.findOne.mockResolvedValue({
                "id": 1,
                "productId": 1,
                "categoryId": 2,
                destroy: async () => Promise.resolve()
            });
    
            const relation = await productsController.deleteCategoryProduct(1);
            
            expect(relation).toBe(undefined)
        })
    });
});

describe('Testing getTopSellers of productsController', () => {

    it('getTopSellers - Should return an array that has a length of 5 when orders.length is less than 5.', async () => {

        const OrderProduct = require('../../src/models/OrderProducts');
        const Product = require('../../src/models/Product');

        OrderProduct.findAll.mockResolvedValue([
            {"id": 1},
            {"id": 2},
            {"id": 3}
        ]);

        Product.findAll.mockResolvedValueOnce([
            {
                "id": 4,
                "productId": 2,
                "categoryId": 3,
                
            },
            {
                "id": 5,
                "productId": 1,
                "categoryId": 2,
                
            }
        ]);

        Product.findAll.mockResolvedValueOnce([
            {
                "id": 6,
                "productId": 2,
                "categoryId": 3,
                
            },
            {
                "id": 7,
                "productId": 1,
                "categoryId": 2,
                
            },
            {
                "id": 8,
                "productId": 1,
                "categoryId": 2,
                
            }
        ]);


        const topSellers = await productsController.getTopSellers();

        expect(topSellers).toHaveLength(5);
         
    });

    it('getTopSellers - Should return an array that has a length of 5 when orders.length its 0.', async () => {

        const OrderProduct = require('../../src/models/OrderProducts');
        const Product = require('../../src/models/Product');

        OrderProduct.findAll.mockResolvedValue([]);

        Product.findAll.mockResolvedValue([
            {
                "id": 4,
                "productId": 2,
                "categoryId": 3,
                
            },
            {
                "id": 5,
                "productId": 1,
                "categoryId": 2,
                
            },
            {
                "id": 6,
                "productId": 2,
                "categoryId": 3,
                
            },
            {
                "id": 7,
                "productId": 1,
                "categoryId": 2,
                
            },
            {
                "id": 8,
                "productId": 1,
                "categoryId": 2,
                
            }
        ]);

    
        const topSellers = await productsController.getTopSellers();

        expect(topSellers).toHaveLength(5);
         
    });

    it('getTopSellers - Should return an array that has a length of 5 when orders.length is greater than 5.', async () => {

        const OrderProduct = require('../../src/models/OrderProducts');
        const Product = require('../../src/models/Product');

        OrderProduct.findAll.mockResolvedValue([
            {"id": 1},
            {"id": 2},
            {"id": 3},
            {"id": 4},
            {"id": 5},
            {"id": 6},
        ]);

        Product.findAll.mockResolvedValue([
            {
                "id": 4,
                "productId": 2,
                "categoryId": 3,
                
            },
            {
                "id": 5,
                "productId": 1,
                "categoryId": 2,
                
            },
            {
                "id": 6,
                "productId": 2,
                "categoryId": 3,
                
            },
            {
                "id": 7,
                "productId": 1,
                "categoryId": 2,
                
            },
            {
                "id": 8,
                "productId": 1,
                "categoryId": 2,
                
            }
        ]);

    
        const topSellers = await productsController.getTopSellers();

        expect(topSellers).toHaveLength(5);
         
    });
});