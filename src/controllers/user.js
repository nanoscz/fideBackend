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
        if (!user) {
          res.status(404).json({
            error: {
              name: 'notFound',
              message: 'user not found.'
            }
          })
        }
        delete user.dataValues.password
        res.json(user)
      })
      .catch(err => next(err))
  }

  update (req, res, next) {
    const body = req.body
    User.update(body, { where: { id: req.params.id } })
      .then((data) => {
        if (data[0] !== 1) {
          res.status(400).json({
            error: {
              name: 'notUpdated',
              message: 'user not updated.'
            }
          })
        }
        res.status(204).end()
      })
      .catch(err => next(err))
  }

  delete (req, res, next) {
    User.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).end())
      .catch(err => next(err))
  }
}

module.exports = UserController
