'use strict'

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      field: 'nombre',
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      field: 'usuario',
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profile: {
      type: DataTypes.STRING,
      field: 'perfil',
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING,
      field: 'foto',
      allowNull: false
    },
    state: {
      type: DataTypes.BOOLEAN,
      field: 'estado',
      allowNull: false
    },
    lastLogin: {
      type: DataTypes.DATE,
      field: 'ultimo_login'
    },
    createAt: {
      type: DataTypes.DATE,
      field: 'fecha'
    }
  }, {
    defaultScope: {
      attributes: {
        exclude: []
      }
    },
    tableName: 'usuarios',
    timestamps: false
  })
  user.associate = function (models) {

  }
  return user
}
