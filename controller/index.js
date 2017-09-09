const express = require('express');

const User = require('./User');
const Place = require('./Place');

const Controller = express.Router();

Controller.use('/user', User);
Controller.use('/place', Place);

module.exports = Controller;
