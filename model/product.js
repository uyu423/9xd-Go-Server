/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('product', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'name',
    },
    imageUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'imageUrl',
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'description',
    },
    stock: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      field: 'stock',
    },
    ordered: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      field: 'ordered',
    },
    price: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      field: 'price',
    },
    sale: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'sale',
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'createdAt',
    },
  }, {
    tableName: 'product',
    timestamps: false,
  });
};
