'use strict'

const Products = require('../models').products
const { Op } = require("sequelize")

/** 
 * @status 0=disable, 1=enable, 2=all 
 */
class ProductsController {
  findAll(req, res, next) {
    const criteria = req.query.criteria;
    const status = req.query.status;

    const order = [
      ['id', 'DESC']
    ]
    const where = {
      status: {
        [Op.ne]: status
      }
    }

    if (criteria) {
      where[Op.or] = [
        {
          description: {
            [Op.like]: `%${criteria}%`
          }
        },
        {
          code: {
            [Op.like]: `%${criteria}%`
          }
        }
      ]
    }


    Products.findAll({ where, order })
      .then(products => {
        res.json(products)
      })
      .catch(err => next(err))
  }

  findOne(req, res, next) {
    Products.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(product => {
        if (!product) {
          res.status(404).json({
            error: {
              name: 'notFound',
              message: 'product not found.'
            }
          })
        }
        res.json(product)
      })
      .catch(err => next(err))
  }

  create(req, res, next) {
    const body = req.body
    Products.create(body)
      .then((product) => {
        res.status(201).json(product.dataValues).end()
      })
      .catch(err => next(err))
  }

  update(req, res, next) {
    const body = req.body
    Products.update(body, { where: { id: req.params.id } })
      .then((data) => {
        if (data[0] !== 1) {
          res.status(400).json({
            error: {
              name: 'notUpdated',
              message: 'product not updated.'
            }
          })
        }
        res.status(204).end()
      })
      .catch(err => next(err))
  }

  delete(req, res, next) {
    Products.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).end())
      .catch(err => next(err))
  }
}

module.exports = ProductsController
