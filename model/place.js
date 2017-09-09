/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('place', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'name',
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'description',
    },
    latittude: {
      type: 'DOUBLE',
      allowNull: false,
      field: 'latittude',
    },
    longitude: {
      type: 'DOUBLE',
      allowNull: false,
      field: 'longitude',
    },
    radius: {
      type: 'DOUBLE',
      allowNull: false,
      field: 'radius',
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'createdAt',
    },
  }, {
    tableName: 'place',
    timestamps: false,
  });
};
