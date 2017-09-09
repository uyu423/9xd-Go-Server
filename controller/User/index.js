const express = require('express');

const postSignUser = require('./postSignUser');

const User = express.Router();

User.post('/sign', async (request, response) => {
  try {
    response.json({
      success: true,
      data: await postSignUser(request.body),
    });
  } catch (error) {
    response.status(error.status).json({
      success: false,
      data: error,
    });
  }
});

module.exports = User;
