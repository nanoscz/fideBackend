'user strict'

module.exports = (sequelize, DataTypes) => {
    const client = sequelize.define('client', {
        name: {
            type: DataTypes.STRING,
            field: 'nombre',
            allowNull: false
        },
        document: {
            type: DataTypes.INTEGER,
            field: 'documento',
            allowNull: false
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        phone: {
            type: DataTypes.TEXT,
            field: 'telefono',
            allowNull: false
        },
        direction: {
            type: DataTypes.TEXT,
            field: 'direccion',
            allowNull: false
        },
        birthDate: {
            type: DataTypes.DATE,
            field: 'fecha_nacimiento',
            allowNull: false
        },
        purchases: {
            type: DataTypes.INTEGER,
            field: 'compras',
            allowNull: false
        },
        lastPurchase: {
            type: DataTypes.DATE,
            field: 'ultima_compra',
            allowNull: false
        },
        createAt: {
            type: DataTypes.DATE,
            field: 'fecha'
        },
    },
        {
            defaultScope: {
                attributes: {
                    exclude: []
                }
            },
            tableName: 'clientes',
            timestamps: false
        }
    )
    client.associate = function (models) { }
    return client
}