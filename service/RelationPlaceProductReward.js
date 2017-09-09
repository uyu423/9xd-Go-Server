const { RelationPlaceProductReward } = require('../model');

exports.getAll = async () => {
  const relations = await RelationPlaceProductReward.findAll();
  return relations;
};
