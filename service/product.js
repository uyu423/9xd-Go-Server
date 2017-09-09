const { Product } = require('../model');

exports.getAll = async () => {
  const products = await Product.findAll();
  return products;
};
