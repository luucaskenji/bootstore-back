const User = require('../models/User');

class UserController {
    createUser() {
        User.create()
    }
}