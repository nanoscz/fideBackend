'use strict'

const { CategoryController } = require('../controllers')

const express = require('express')
const router = express.Router()
const categoryController = new CategoryController()

router
  .route('/')
  .get(categoryController.findAll)
  .post(categoryController.create)

router
  .route('/:id')
  .get(categoryController.findOne)
  .patch(categoryController.update)
  .delete(categoryController.delete)

module.exports = {
  categoryChildRouter: router
}
