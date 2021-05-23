'use strict'

const { ClientController } = require('../controllers')

const express = require('express')
const router = express.Router()
const clientController = new ClientController()

router
  .route('/')
  .get(clientController.findAll)
  .post(clientController.create)

router
  .route('/:id')
  .get(clientController.findOne)
  .patch(clientController.update)
  .delete(clientController.delete)

module.exports = {
  clientChildRouter: router
}
