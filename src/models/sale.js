'user strict'

module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
    code: {
      type: DataTypes.STRING,
      field: 'codigo',
      allowNull: false
    },
    idCliente: {
      type: DataTypes.INTEGER,
      field: 'id_cliente',
      allowNull: false
    },
    idSeller: {
      type: DataTypes.INTEGER,
      field: 'id_vendedor',
      allowNull: false
    },
    products: {
      type: DataTypes.TEXT,
      field: 'productos',
      allowNull: false
    },
    tax: {
      type: DataTypes.INTEGER,
      field: 'impuesto',
      allowNull: false
    },
    neto: {
      type: DataTypes.INTEGER,
      field: 'neto',
      allowNull: false
    },
    total: {
      type: DataTypes.INTEGER,
      field: 'total',
      allowNull: false
    },
    payment: {
      type: DataTypes.TEXT,
      field: 'metodo_pago',
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: null
    },
    date: {
      type: DataTypes.DATE,
      field: 'fecha'
    },
    createAt: {
      type: DataTypes.DATE,
      field: 'createAt'
    },
    updateAt: {
      type: DataTypes.DATE,
      field: 'updateAt'
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    }
  },
    {
      defaultScope: {
        attributes: {
          exclude: []
        }
      },
      tableName: 'ventas',
      timestamps: false
    }
  )
  sale.associate = function (models) {

  }
  return sale
}
