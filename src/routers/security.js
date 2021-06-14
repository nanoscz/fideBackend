'use strict'

const { SecurityController } = require('../controllers')

const express = require('express')
const router = express.Router()
const securityController = new SecurityController()

router
  .route('/login')
  .post(securityController.login)

router
  .route('/register')
  .post(securityController.register)

module.exports = {
  securityChildRouter: router
}