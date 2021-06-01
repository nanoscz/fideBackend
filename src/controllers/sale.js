'use strict'

const Sale = require('../models').sale
const { Op } = require("sequelize");

class SaleController {
  findAll(req, res, next) {
    console.log(req.params)
    Sale.findAll()
      .then(sales => {
        res.json(sales)
      })
      .catch(err => next(err))
  }

  findOne(req, res, next) {
    Sale.findOne({ where: { id: req.params.id } })
      .then(sale => {
        res.json(sale)
      })
      .catch(err => next(err))
  }

  findForDate(req, res, next) {
    const { date, idSeller } = req.body;
    const startDate = new Date(date);
    const endDate = new Date(startDate)
    endDate.setDate(endDate.getDate() + 1);

    const where = {
      createAt: {
        [Op.between]: [startDate, endDate]
      },
      idSeller: idSeller
    };
    const order = [
      ['createAt', 'DESC']
    ]
    Sale.findAll({ where, order })
      .then(sale => {
        res.json(sale)
      })
      .catch(err => next(err))
  }

  create(req, res, next) {
    const body = req.body
    Sale.create(body)
      .then(() => res.status(201).end())
      .catch(err => next(err))
  }

  update(req, res, next) {
    const body = req.body
    Sale.update(body, { where: { id: req.params.id } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }

  delete(req, res, next) {
    Sale.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).end())
      .catch(err => next(err))
  }
}

module.exports = SaleController
