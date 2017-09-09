const _ = require('lodash');
const Service = require('../../service');

module.exports = async function getAllPlace({ userId }) {
  const places = await Service.Place.getAll();
  if (userId) {
    const relations = await Service.RelationUserPlaceConquest.getRelationByUserId(userId);
    places.map((place) => {
      const relation = _.find(relations, { placeId: place.id });
      if (relation) {
        return Object.assign(place.get(), { conquest: true });
      }
      return Object.assign(place.get(), { conquest: false });
    });
  }
  return places;
};
