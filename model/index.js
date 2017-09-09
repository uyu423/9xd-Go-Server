const dt = require('sequelize').DataTypes;
const s = require('../connector/Sequelize');

const User = require('./user');

exports.User = User(s, dt);
