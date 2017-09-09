const Place = require('express').Router();

const getAllPlace = require('./getAllPlace');

Place.get('/', async (request, response) => {
  try {
    response.json({
      success: true,
      data: await getAllPlace(request.query),
    });
  } catch (error) {
    console.error(error);
    response.status(error.status || 500).json({
      success: false,
      data: error,
    });
  }
});

module.exports = Place;
