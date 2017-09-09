/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    fbId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'fbId',
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'name',
    },
    authToken: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'authToken',
    },
    refreshToken: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'refreshToken',
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'createdAt',
    },
    refreshAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'refreshAt',
    },
  }, {
    tableName: 'user',
    timestamps: false,
  });
};
