const { RelationUserPlaceConquest } = require('../model');

exports.getRelationByUserId = async (userId) => {
  const relations = await RelationUserPlaceConquest.findAll({ where: { userId } });
  return relations;
};
