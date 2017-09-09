/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('rPlaceProductReward', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    placeId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      field: 'placeId',
    },
    productId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      field: 'productId',
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'createdAt',
    },
  }, {
    tableName: 'rPlaceProductReward',
    timestamps: false,
  });
};
