const { Place } = require('../model');

exports.getAll = async function getAllPlace() {
  const places = await Place.findAll();
  return places;
};

exports.getById = async (id) => {
  const place = await Place.find({
    where: { id },
  });
  return place;
};
