'use strict'

const Category = require('../models').category

class CategoryController {
  findAll(req, res, next) {
    const where = {}
    const order = [
      ['createAt', 'DESC']
    ]
    Category.findAll({ where, order })
      .then(categories => {
        res.json(categories)
      })
      .catch(err => next(err))
  }

  findOne(req, res, next) {
    Category.findOne({ where: { id: req.params.id } })
      .then(category => {
        if (!category) {
          res.status(404).json({
            error: {
              name: 'notFound',
              message: 'category not found.'
            }
          })
        }
        res.json(category)
      })
      .catch(err => next(err))
  }

  create(req, res, next) {
    const body = req.body
    Category.create(body)
      .then((category) => {
        res.status(201).json(category.dataValues).end()
      })
      .catch(err => next(err))
  }

  update(req, res, next) {
    const body = req.body
    Category.update(body, { where: { id: req.params.id } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }

  delete(req, res, next) {
    Category.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).end())
      .catch(err => next(err))
  }
}

module.exports = CategoryController
