
const sideMenu = require('../utils/sideMenu')
const { userIsAdmin } = require('../utils/utils')

class SideMenuController {
  getSideMenu (req, res, next) {
    const user = req.user
    const isAdmin = userIsAdmin(user)
    const filteredSideMenu = isAdmin === true ? sideMenu : [sideMenu[0]]
    res.json(filteredSideMenu)
  }
}

module.exports = SideMenuController
