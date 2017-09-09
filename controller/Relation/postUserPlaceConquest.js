const Service = require('../../service');

module.exports = async function postUserPlaceConquest({ userId, placeId }) {
  const createdConquest = await Service.RelationUserPlaceConquest.create({ userId, placeId });
  return createdConquest;
};
