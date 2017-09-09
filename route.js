const express = require('express');

const Controller = require('./controller');

const { NotImplementedException } = require('./error');

const Router = express.Router();

Router.use('/', Controller);

Router.get('*', (request, response) => {
  try {
    throw new NotImplementedException();
  } catch (error) {
    response.status(error.status).json({
      success: false,
      data: error,
    });
  }
});

module.exports = Router;
