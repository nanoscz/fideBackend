'use strict'
const authorization = require('../middleware/autorization')

const { UserController } = require('../controllers')

const express = require('express')
const router = express.Router()
const userController = new UserController()

router
  .route('/')
  .get(userController.findAll)

router
  .route('/:id')
  .get(authorization, userController.findOne)
  .patch(userController.update)
  .delete(userController.delete)

module.exports = {
  userChildRouter: router
}
