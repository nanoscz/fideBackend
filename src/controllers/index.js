'use strict'

const UserController = require('./user')
const SaleController = require('./sale')
const ProductsController = require('./products')
const ClientController = require('./client')
const CategoryController = require('./category')
const SecurityController = require('./security')

module.exports = {
  UserController,
  SaleController,
  ProductsController,
  ClientController,
  CategoryController,
  SecurityController
}
