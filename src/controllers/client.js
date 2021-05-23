'use strict'

const Client = require('../models').client

class ClientController {
    findAll(req, res, next) {
        Client.findAll()
            .then(clients => {
                res.json(clients)
            })
            .catch(err => next(err))
    }

    findOne(req, res, next) {
        Client.findOne({ where: { id: req.params.id } })
            .then(client => {
                res.json(client)
            })
            .catch(err => next(err))
    }

    create(req, res, next) {
        const body = req.body
        Client.create(body)
            .then(() => res.status(201).end())
            .catch(err => next(err))
    }

    update(req, res, next) {
        const body = req.body
        Client.update(body, { where: { id: req.params.id } })
            .then(() => res.status(200).end())
            .catch(err => next(err))
    }

    delete(req, res, next) {
        Client.destroy({ where: { id: req.params.id } })
            .then(() => res.status(204).end())
            .catch(err => next(err))
    }
}

module.exports = ClientController