const Relation = require('express').Router();

const postUserPlaceConquest = require('./postUserPlaceConquest');

Relation.post('/conquest', async (request, response) => {
  try {
    response.json({
      success: true,
      data: await postUserPlaceConquest(request.body),
    });
  } catch (error) {
    console.error(error);
    response.status(error.status || 500).json({
      success: false,
      data: error,
    });
  }
});

module.exports = Relation;
