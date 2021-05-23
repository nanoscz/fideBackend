'use strict'

const { SaleController } = require('../controllers')

const express = require('express')
const router = express.Router()
const saleController = new SaleController()

router
  .route('/')
  .get(saleController.findAll)
  .post(saleController.create)

router
  .route('/:id')
  .get(saleController.findOne)
  .patch(saleController.update)
  .delete(saleController.delete)

module.exports = {
  saleChildRouter: router
}
