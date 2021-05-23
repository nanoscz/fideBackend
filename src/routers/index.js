'use strict'

const { userChildRouter } = require('./user')
const { saleChildRouter } = require('./sale')
const { productsChildRouter } = require('./products')

const express = require('express')
const router = express.Router()

router.use('/user', userChildRouter)
router.use('/sale', saleChildRouter)
router.use('/products', productsChildRouter)

module.exports = router