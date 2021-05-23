'use strict'

const Products = require('../models').products

class ProductsController {
    findAll(req, res, next) {
        Products.findAll()
            .then(products => {
                res.json(products)
            })
            .catch(err => next(err))
    }

    findOne(req, res, next) {
        Products.findOne({ where: { id: req.params.id } })
            .then(product => {
                res.json(product)
            })
            .catch(err => next(err))
    }

    create(req, res, next) {
        const body = req.body
        Products.create(body)
            .then(() => res.status(201).end())
            .catch(err => next(err))
    }

    update(req, res, next) {
        const body = req.body
        Products.update(body, { where: { id: req.params.id } })
            .then(() => res.status(200).end())
            .catch(err => next(err))
    }

    delete(req, res, next) {
        Products.destroy({ where: { id: req.params.id } })
            .then(() => res.status(204).end())
            .catch(err => next(err))
    }
}

module.exports = ProductsController