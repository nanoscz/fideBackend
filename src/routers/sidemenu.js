'use strict'

const { SideMenuController } = require('../controllers')
const authorization = require('../middleware/autorization')

const express = require('express')
const router = express.Router()
const sideMenuController = new SideMenuController()

router
  .route('/')
  .get(authorization, sideMenuController.getSideMenu)

module.exports = {
  sideMenuChildRouter: router
}
