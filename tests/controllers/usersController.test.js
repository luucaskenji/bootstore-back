require('dotenv').config();
const usersController = require('../../src/controllers/usersController');
const ConflictError = require ('../../src/errors/ConflictError');
const NotFoundError = require ('../../src/errors/NotFoundError');
const AuthError = require ('../../src/errors/AuthError');


jest.mock('../../src/models/User.js');
jest.mock('../../src/models/Session.js');
jest.mock('../../src/models/Address.js');

describe('Testing createUser of usersController', () => {

    it('createUser - Should return a throw error trying to create a user that already exists.', async () => {
        
        const User = require('../../src/models/User');

        User.findOne.mockResolvedValue({
            "id": 1,
            "name": "Pedrão Barros",
            "email": "barrospedrao@gmail.com",
            "cpf": "333.444.888-55",
        })

        const dataUser = {
            "name": "Pedrão Barros",
            "email": "barrospedrao@gmail.com",
            "cpf": "333.444.888-55",
        }

        async function user() {
            return await usersController.createUser(dataUser);
        }

        expect(user).rejects.toThrow(ConflictError)
    });

    it('createProduct - Should return an object of the created product.', async () => {

        const User = require('../../src/models/User');

        User.findOne.mockResolvedValue(null);

        User.create.mockResolvedValue({
                "id": 1,
                "name": "Pedrão Barros",
                "email": "barrospedrao@gmail.com",
                "cpf": "333.444.888-55",
            }
        );

        const dataUser = {
            "name": "Pedrão Barros",
            "email": "barrospedrao@gmail.com",
            "cpf": "333.444.888-55",
        }

        const user = await usersController.createUser(dataUser);

        expect(user).toEqual(expect.objectContaining({
            "id": 1,
            "name": "Pedrão Barros",
            "email": "barrospedrao@gmail.com",
            "cpf": "333.444.888-55",
        }))
    });

});

describe('Testing deleteUser of usersController', () => {

    it('deleteUser - Should return a throw error if the User does not exist.', async () => {

        const User = require('../../src/models/User');

        User.findByPk.mockResolvedValue(null);

        async function user() {
            return await usersController.deleteUser(1);
        }

        expect(user).rejects.toThrow(NotFoundError);
    });

    it('deleteUser - Should return undefined if user was successfully deleted', async () => {

        const User = require('../../src/models/User');

        User.findByPk.mockResolvedValue({
            "id": 1,
            "name": "Pedrão Barros",
            "email": "barrospedrao@gmail.com",
            "cpf": "333.444.888-55",
            destroy: async () => Promise.resolve()
        })

        const user = await usersController.deleteUser(1);
        
        expect(user).toBe(undefined)
    });

});

describe('Testing getUserById of usersController', () => {

    it('getUserById - Should return a throw error if the user does not exist.', async () => {

        const User = require('../../src/models/User');

        User.findByPk.mockResolvedValue(null);

        async function user() {
            return await usersController.getUserById(99);
        }    
        
        expect(user).rejects.toThrow(NotFoundError);


    });

    it('getUserById - Should return an object of the user found.', async () => {

        const User = require('../../src/models/User');

        User.findByPk.mockResolvedValue({
            "id": 1,
            "name": "Pedrão Barros",
            "email": "barrospedrao@gmail.com",
            "cpf": "333.444.888-55",
        });

       
        const user = await usersController.getUserById(1);
         
        
        expect(user).toEqual(expect.objectContaining({
            "id": 1,
            "name": "Pedrão Barros",
            "email": "barrospedrao@gmail.com",
            "cpf": "333.444.888-55",
        }))


    });


});

describe('Testing postAdminSignIn of usersController', () => {

    it('postAdminSignIn - Should return a throw error trying to login with wrong username and password.', async () => {

        process.env.ADMIN_USERNAME="admin";
        process.env.ADMIN_PASSWORD="admin";
        
        async function login() {
            return await usersController.postAdminSignIn("Paola", "12345")
        }    
        
        expect(login).rejects.toThrow(AuthError);
        
    });

    it('postAdminSignIn - Should return a session if username and password are correct.', async () => {

        process.env.ADMIN_USERNAME="admin";
        process.env.ADMIN_PASSWORD="admin";

        const Session = require('../../src/models/Session');
        Session.create.mockResolvedValue({
            "id": 1,
            "token": "123e4567-e89b-12d3-a456-426614174000",
        });
        
        
        const login = await usersController.postAdminSignIn("admin", "admin");
          
        expect(login).toEqual(expect.objectContaining({
            "id": 1,
            "token": "123e4567-e89b-12d3-a456-426614174000",
        }))
        
        
    });
});

describe('Testing postAdminSignOut of usersController', () => {

    it('postAdminSignOut - Should return undefined if session was successfully deleted', async () => {
    
        const Session = require('../../src/models/Session');
        Session.destroy.mockResolvedValue({
            "id": 1,
            "token": "123e4567-e89b-12d3-a456-426614174000",
            destroy: async () => Promise.resolve()
        });

        const session = await usersController.postAdminSignOut("123e4567-e89b-12d3-a456-426614174000");
        
        expect(session).toBe(undefined)
    })


});

describe('Testing postUserAddress of usersController', () => {

    it('postUserAddress - Should return a throw error if the user does not exist', async () => {
    
        const User = require('../../src/models/User');

        User.findOne.mockResolvedValue(null);

        const dataAddress = {
            "cep": "04000231",
            "streetName": "Rua legal",
            "streetNumber": "123" ,
            "neighbourhood": "vila",
            "complement": "apart 34",
            "state": "SP" ,
            "city": "São Paulo"
        }

        async function user() {
            return await usersController.postUserAddress(99, dataAddress);
        }    
        
        expect(user).rejects.toThrow(NotFoundError);


    });

    it('postUserAddress - Should return an object with address if was successfully created.', async () => {

        const User = require('../../src/models/User');
        User.findOne.mockResolvedValue({
            "id": 1,
            "name": "Pedrão Barros",
            "email": "barrospedrao@gmail.com",
            "cpf": "333.444.888-55",
        })
    
        const Address = require('../../src/models/Address');
        Address.create.mockResolvedValue({
            "id": 1,
            "cep": "04000231",
            "streetName": "Rua legal",
            "streetNumber": "123" ,
            "neighbourhood": "vila",
            "complement": "apart 34",
            "state": "SP" ,
            "city": "São Paulo"
        });

        const dataAddress = {
            "cep": "04000231",
            "streetName": "Rua legal",
            "streetNumber": "123" ,
            "neighbourhood": "vila",
            "complement": "apart 34",
            "state": "SP" ,
            "city": "São Paulo"
        }

        
        const address = await usersController.postUserAddress(1, dataAddress);
          
        
        expect(address).toEqual(expect.objectContaining({
            "id": 1,
            "cep": "04000231",
            "streetName": "Rua legal",
            "streetNumber": "123" ,
            "neighbourhood": "vila",
            "complement": "apart 34",
            "state": "SP" ,
            "city": "São Paulo"
        }))


    })


});