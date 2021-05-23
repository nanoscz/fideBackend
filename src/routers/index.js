'use strict'

const { userChildRouter } = require('./user')
const { saleChildRouter } = require('./sale')

const express = require('express')
const router = express.Router()

router.use('/user', userChildRouter)
router.use('/sale', saleChildRouter)

module.exports = router