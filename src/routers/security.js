'use strict'

const { SecurityController } = require('../controllers')
const authorization = require('../middleware/autorization')

const express = require('express')
const router = express.Router()
const securityController = new SecurityController()

router
  .route('/login')
  .post(securityController.login)

router
  .route('/register')
  .post(securityController.register)

router
  .route('/authorization')
  .get(authorization, securityController.checkAuthorization)

module.exports = {
  securityChildRouter: router
}
