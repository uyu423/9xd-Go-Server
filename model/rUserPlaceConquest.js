/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('rUserPlaceConquest', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    userId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      field: 'userId',
    },
    placeId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      field: 'placeId',
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'createdAt',
    },
  }, {
    tableName: 'rUserPlaceConquest',
    timestamps: false,
  });
};
