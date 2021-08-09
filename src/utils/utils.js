function userIsAdmin (user) {
  return user.name === 'Administrador'
}

module.exports = {
  userIsAdmin
}
