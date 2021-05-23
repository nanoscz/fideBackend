'use strict'

const { ProductsController } = require('../controllers')

const express = require('express')
const router = express.Router()
const productsController = new ProductsController()

router
    .route('/')
    .get(productsController.findAll)
    .post(productsController.create)

router
    .route('/:id')
    .get(productsController.findOne)
    .patch(productsController.update)
    .delete(productsController.delete)

module.exports = {
    productsChildRouter: router
}