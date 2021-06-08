'user strict'

module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define('category', {
        name: {
            type: DataTypes.STRING,
            field: 'categoria',
            allowNull: false
        },
        createAt: {
            type: DataTypes.DATE,
            field: 'fecha'
        }
    },
        {
            defaultScope: {
                attributes: {
                    exclude: []
                }
            },
            tableName: 'categorias',
            timestamps: false
        }
    )
    category.associate = function (models) { }
    return category
}