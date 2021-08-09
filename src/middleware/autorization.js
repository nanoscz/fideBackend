const jwt = require('jsonwebtoken')

function authorization (req, res, next) {
  const authorization = req.headers.authorization
  const [, token] = authorization.split(' ')
  if (token === null || token === undefined) {
    return res.sendStatus(403)
  }
  try {
    const data = jwt.verify(token, process.env.KEY)
    req.user = data
    next()
  } catch (error) {
    return res.sendStatus(403)
  }
}

module.exports = authorization
