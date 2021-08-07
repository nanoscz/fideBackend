'use strict'

/**
 * @status 0=disable, 1=enable, 2=all
 */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('productos', 'status', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    })
  },

  down: queryInterface => {
    return queryInterface.removeColumn('productos', 'status')
  }
}
