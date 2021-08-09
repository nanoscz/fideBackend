'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('ventas', 'fecha', {
      type: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('ventas', 'fecha', {
      type: Sequelize.DATE
    })
  }
}
