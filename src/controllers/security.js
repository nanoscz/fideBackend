const bcrypt = require('bcryptjs')
const User = require('../models').user

const saltRounds = 10

class SecurityController {
  login(req, res, next) {
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
              delete user.dataValues.password
              delete user.dataValues.lastLogin
              res.json(user)
            } else {
              return res.status(400).json(error)
            }
          })
          .catch(err => next(err))
      })
      .catch(err => next(err))
  }

  register(req, res, next) {
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
