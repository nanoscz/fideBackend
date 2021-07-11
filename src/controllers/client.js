'use strict'

const Client = require('../models').client
const { Op } = require("sequelize")

class ClientController {
  findAll(req, res, next) {
    const where = {}
    const criteria = req.query?.criteria;

    if (criteria) {
      where.name = {
        [Op.like]: `%${criteria}%`
      }
    }

    const order = [
      ['id', 'DESC']
    ]

    Client.findAll({ where, order })
      .then(clients => {
        res.json(clients)
      })
      .catch(err => next(err))
  }

  findOne(req, res, next) {
    Client.findOne({ where: { id: req.params.id } })
      .then(client => {
        if (!client) {
          res.status(404).json({
            error: {
              name: 'notFound',
              message: 'client not found.'
            }
          })
        }
        res.json(client)
      })
      .catch(err => next(err))
  }

  create(req, res, next) {
    const body = req.body
    Client.create(body)
      .then((client) => {
        res.status(201).json(client.dataValues).end()
      })
      .catch(err => next(err))
  }

  update(req, res, next) {
    const body = req.body
    Client.update(body, { where: { id: req.params.id } })
      .then((data) => {
        if (data[0] !== 1) {
          res.status(400).json({
            error: {
              name: 'notUpdated',
              message: 'client not updated.'
            }
          })
        }
        res.status(204).end()
      })
      .catch(err => next(err))
  }

  delete(req, res, next) {
    Client.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).end())
      .catch(err => next(err))
  }
}

module.exports = ClientController
