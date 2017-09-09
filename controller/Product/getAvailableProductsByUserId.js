const _ = require('lodash');
const Service = require('../../service');
const {
  ParameterNotAllowNullException,
  NotFoundException,
} = require('../../error');

module.exports = async function getAvailableProductsByUserId({ userId }) {
  if (!userId) {
    throw new ParameterNotAllowNullException();
  }
  const products = await Service.Product.getAll();
  const placeRewards = await Service.RelationPlaceProductReward.getAll();

  const associateProducts = products.map((product) => {
    const supplyPlaces = placeRewards.filter(place => place.productId === product.id);
    return Object.assign(product.get(), {
      supplyPlaces,
    });
  });

  const user = await Service.User.getById(+userId);
  if (!user) {
    throw new NotFoundException();
  }
  const userConquest = await Service.RelationUserPlaceConquest.getRelationByUserId(user.id);
  const userConquestPlaceIds = userConquest.map(relation => relation.placeId);

  // return { associateUser, associateProducts };
  return associateProducts.map((product) => {
    if (product.supplyPlaces.length > 0) {
      const productSupplyPlaceIds = product.supplyPlaces.map(relation => relation.placeId);
      const userPurchaseAvailable = _.intersection(
        productSupplyPlaceIds,
        userConquestPlaceIds,
      ).length > 0;
      if (userPurchaseAvailable) {
        return Object.assign(product, {
          available: true,
        });
      }
      return Object.assign(product, {
        available: false,
        name: 'BLOCK',
        imageUrl: 'BLOCK',
        description: 'BLOCK',
        price: 0,
        sale: 0,
      });
    }
    return Object.assign(product, {
      available: true,
    });
  });
};
