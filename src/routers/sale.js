'use strict'

const { SaleController } = require('../controllers')
const authorization = require('../middleware/autorization')

const express = require('express')
const router = express.Router()
const saleController = new SaleController()

router
  .route('/')
  .get(authorization, saleController.findAll)
  .post(saleController.create)

router
  .route('/:id')
  .get(saleController.findOne)
  .patch(saleController.update)
  .delete(saleController.delete)

router
  .route('/date')
  .post(authorization, saleController.findForDate)

router
  .route('/report/date')
  .post(saleController.findByDate)

module.exports = {
  saleChildRouter: router
}
