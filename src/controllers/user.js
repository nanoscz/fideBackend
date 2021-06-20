'use strict'

const User = require('../models').user

class UserController {
  findAll (req, res, next) {
    const where = {}
    const order = [
      ['createAt', 'DESC']
    ]
    User.findAll({ where, order })
      .then(users => {
        for (const user of users) {
          delete user.dataValues.password
        }
        res.json(users)
      })
      .catch(err => next(err))
  }

  findOne (req, res, next) {
    User.findOne({ where: { id: req.params.id } })
      .then(user => {
        delete user.dataValues.password
        res.json(user)
      })
      .catch(err => next(err))
  }

  update (req, res, next) {
    const body = req.body
    User.update(body, { where: { id: req.params.id } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }

  delete (req, res, next) {
    User.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).end())
      .catch(err => next(err))
  }
}

module.exports = UserController
