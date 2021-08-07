'use strict'

const Sale = require('../models').sale
const { Op } = require('sequelize')

class SaleController {
  findAll (req, res, next) {
    const status = req.query.status
    const where = {
      status: {
        [Op.ne]: status
      }
    }

    const order = [
      ['id', 'DESC']
    ]

    Sale.findAll({ where, order })
      .then(sales => {
        res.json(sales)
      })
      .catch(err => next(err))
  }

  findOne (req, res, next) {
    Sale.findOne({ where: { id: req.params.id } })
      .then(sale => {
        if (!sale) {
          res.status(404).json({
            error: {
              name: 'notFound',
              message: 'sale not found.'
            }
          })
        }
        res.json(sale)
      })
      .catch(err => next(err))
  }

  findForDate (req, res, next) {
    const { date, idSeller } = req.body
    const startDate = new Date(date)
    const endDate = new Date(startDate)
    endDate.setDate(endDate.getDate() + 1)

    const where = {
      createAt: {
        [Op.between]: [startDate, endDate]
      },
      idSeller: idSeller
    }
    const order = [
      ['id', 'DESC']
    ]
    Sale.findAll({ where, order })
      .then(sale => {
        res.json(sale)
      })
      .catch(err => next(err))
  }

  findByDate (req, res, next) {
    const { date } = req.body
    const startDate = new Date(date)
    const endDate = new Date(startDate)
    endDate.setDate(endDate.getDate() + 1)

    const where = {
      createAt: {
        [Op.between]: [startDate, endDate]
      }
    }
    const order = [
      ['id', 'DESC']
    ]
    Sale.findAll({ where, order })
      .then(sale => {
        res.json(sale)
      })
      .catch(err => next(err))
  }

  create (req, res, next) {
    const body = req.body
    const where = {}
    const order = [
      ['id', 'DESC']
    ]

    Sale.findOne({ where, order })
      .then(lastSale => {
        body.code = lastSale.dataValues.code + 1
        Sale.create(body)
          .then((sale) => {
            res.status(201).json(sale.dataValues).end()
          })
          .catch(err => next(err))
      })
      .catch(err => next(err))
  }

  update (req, res, next) {
    const body = req.body
    Sale.update(body, { where: { id: req.params.id } })
      .then((data) => {
        if (data[0] !== 1) {
          res.status(400).json({
            error: {
              name: 'notUpdated',
              message: 'sale not updated.'
            }
          })
        }
        res.status(204).end()
      })
      .catch(err => next(err))
  }

  delete (req, res, next) {
    Sale.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).end())
      .catch(err => next(err))
  }
}

module.exports = SaleController
