'user strict'

module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    idCategory: {
      type: DataTypes.INTEGER,
      field: 'id_categoria',
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      field: 'codigo',
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      field: 'descripcion',
      allowNull: false
    },
    imagen: {
      type: DataTypes.TEXT,
      field: 'imagen',
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      field: 'stock',
      allowNull: false
    },
    cost: {
      type: DataTypes.INTEGER,
      field: 'precio_compra',
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      field: 'precio_venta',
      allowNull: false
    },
    sales: {
      type: DataTypes.INTEGER,
      field: 'ventas',
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
      tableName: 'productos',
      timestamps: false
    }
  )
  products.associate = function (models) { }
  return products
}
