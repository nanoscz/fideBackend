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
    createAt: {
      type: DataTypes.DATE,
      field: 'fecha'
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
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
