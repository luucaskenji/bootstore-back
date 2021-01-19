const Product = require("../models/Product");
const Category = require("../models/Category");
const CategoryProduct = require("../models/CategoryProduct");
const User = require("../models/User");
const Order = require("../models/Order");
const OrderProduct = require("../models/OrderProducts");

Product.belongsToMany(Category, { through: CategoryProduct });
Category.belongsToMany(Product, { through: CategoryProduct });

User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderProduct });
Product.belongsToMany(Order, { through: OrderProduct });

