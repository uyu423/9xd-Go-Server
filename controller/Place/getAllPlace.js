const _ = require('lodash');
const Service = require('../../service');

module.exports = async function getAllPlace({ userId }) {
  const places = await Service.Place.getAll();
  const products = await Service.Product.getAll();
  const placeProductRewards = await Service.RelationPlaceProductReward.getAll();

  const associatePlaces = places.map((place) => {
    const supplyPlace = placeProductRewards.filter(relation => relation.placeId === place.id);
    const productIds = supplyPlace.map(relation => relation.productId);

    return Object.assign(place.get(), {
      products: products.filter(product => productIds.indexOf(product.id) >= 0),
    });
  });
  if (userId) {
    const relations = await Service.RelationUserPlaceConquest.getRelationByUserId(userId);
    associatePlaces.map((place) => {
      const relation = _.find(relations, { placeId: place.id });
      if (relation) {
        return Object.assign(place, { conquest: true });
      }
      return Object.assign(place, { conquest: false });
    });
  }
  return associatePlaces;
};
