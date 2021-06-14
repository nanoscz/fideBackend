'use strict'

const { userChildRouter } = require('./user')
const { saleChildRouter } = require('./sale')
const { productsChildRouter } = require('./products')
const { clientChildRouter } = require('./client')
const { categoryChildRouter } = require('./category')
const { securityChildRouter } = require('./security')

const express = require('express')
const router = express.Router()

router.use('/user', userChildRouter)
router.use('/sale', saleChildRouter)
router.use('/products', productsChildRouter)
router.use('/client', clientChildRouter)
router.use('/category', categoryChildRouter)
router.use('/security', securityChildRouter)

module.exports = router
