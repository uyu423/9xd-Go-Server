const { RelationUserPlaceConquest } = require('../model');
const { Place, User } = require('../service');
const {
  ParameterNotAllowNullException,
  NotFoundException,
  UniqueValueException,
} = require('../error');

exports.getRelationByUserId = async (userId) => {
  const relations = await RelationUserPlaceConquest.findAll({ where: { userId } });
  return relations;
};

async function getById(id) {
  const relation = await RelationUserPlaceConquest.find({ where: { id } });
  return relation;
}

async function getByUserIdAndPlaceId({ userId, placeId }) {
  const relation = await RelationUserPlaceConquest.find({
    where: {
      userId,
      placeId,
    },
  });
  return relation;
}

exports.create = async ({ userId, placeId }) => {
  if (!userId || !placeId) {
    throw new ParameterNotAllowNullException();
  }
  const uniqueValueCheck = await getByUserIdAndPlaceId({ userId, placeId });
  if (uniqueValueCheck && uniqueValueCheck !== {}) {
    throw new UniqueValueException();
  }
  const user = await User.getById(userId);
  const place = await Place.getById(placeId);
  if (!user || user === {} || !place || place === {}) {
    throw new NotFoundException();
  }

  const createdRelation = await RelationUserPlaceConquest.create({
    userId: user.id,
    placeId: place.id,
  });

  const doubleCheckRelation = await getById(createdRelation.id);

  return doubleCheckRelation;
};
