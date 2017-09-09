const express = require('express');

const User = require('./User');

const Controller = express.Router();

Controller.use('/user', User);

module.exports = Controller;
