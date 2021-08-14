'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('ventas', 'description', {
      type: Sequelize.TEXT,
      after: 'metodo_pago'
    })
  },

  down: queryInterface => {
    return queryInterface.removeColumn('ventas', 'description')
  }
}