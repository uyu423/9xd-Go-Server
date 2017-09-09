const express = require('express');

const User = require('./User');
const Place = require('./Place');
const Product = require('./Product');

const Controller = express.Router();

Controller.use('/user', User);
Controller.use('/place', Place);
Controller.use('/product', Product);

module.exports = Controller;
