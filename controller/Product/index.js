const Product = require('express').Router();

const getAvailableProductsByUserId = require('./getAvailableProductsByUserId');

Product.get('/', async (request, response) => {
  try {
    response.json({
      success: true,
      data: await getAvailableProductsByUserId(request.query),
    });
  } catch (error) {
    console.error(error);
    response.status(error.status || 500).json({
      success: false,
      data: error,
    });
  }
});

module.exports = Product;
