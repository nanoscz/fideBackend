'use strict'

/**
 * @status 0=disable, 1=enable, 2=all
 */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('ventas', 'updateAt', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    })
  },

  down: queryInterface => {
    return queryInterface.removeColumn('ventas', 'updateAt')
  }
}
