const { Place } = require('../model');

exports.getAll = async function getAllPlace() {
  const places = await Place.findAll();
  return places;
};
