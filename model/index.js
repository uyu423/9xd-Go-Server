const dt = require('sequelize').DataTypes;
const s = require('../connector/Sequelize');

const User = require('./user');
const Place = require('./place');
const Product = require('./product');
const RelationPlaceProductReward = require('./rPlaceProductReward');
const RelationUserPlaceConquest = require('./rUserPlaceConquest');

exports.User = User(s, dt);
exports.Place = Place(s, dt);
exports.Product = Product(s, dt);
exports.RelationPlaceProductReward = RelationPlaceProductReward(s, dt);
exports.RelationUserPlaceConquest = RelationUserPlaceConquest(s, dt);
