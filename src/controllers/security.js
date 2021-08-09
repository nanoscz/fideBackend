const bcrypt = require('bcryptjs')
const User = require('../models').user
const jwt = require('jsonwebtoken')
const saltRounds = 10

class SecurityController {
  checkAuthorization (req, res, next) {
    res.send(req.user.isAdmin)
  }

  login (req, res, next) {
    const error = {
      name: 'Authentication Error.',
      message: 'The username or password is incorrect.'
    }
    const body = req.body
    User.findOne({ where: { username: body.username } })
      .then(user => {
        if (!user) {
          return res.status(400).json(error)
        }
        bcrypt.compare(body.password, user.password)
          .then((result) => {
            if (result) {
              const expiresIn = 60 * 60 * 8
              const isAdmin = user.profile === 'Administrador'
              const payload = {
                id: user.id,
                name: user.name,
                username: user.username,
                isAdmin
              }
              const token = jwt.sign(payload, process.env.KEY, { expiresIn })

              res.json({
                token,
                user: {
                  name: user.name,
                  username: user.username
                },
                mg_mda: Buffer.from(`${isAdmin}`).toString('base64')
              })
            } else {
              return res.status(400).json(error)
            }
          })
          .catch(err => next(err))
      })
      .catch(err => next(err))
  }

  register (req, res, next) {
    const body = req.body
    const salt = bcrypt.genSaltSync(saltRounds)
    const password = bcrypt.hashSync(body.password, salt)
    const user = {
      name: body.name,
      username: body.username,
      profile: body.profile,
      photo: body.photo,
      state: body.state,
      password,
      lastLogin: new Date(),
      createAt: new Date()
    }

    User.create(user)
      .then((user) => {
        delete user.dataValues.password
        res.status(201).json(user.dataValues).end()
      })
      .catch(err => next(err))
  }
}

module.exports = SecurityController
