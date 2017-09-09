const { User } = require('../model');

exports.sign = async function sign(params) {
  let user = await findUserByFacebookId(params);
  if (!user || user === {}) {
    await createUserUsingFacebookOAuth(params);
    user = await findUserByFacebookId(params);
  }
  return user;
};

async function findUserByFacebookId({ fbId }) {
  const user = await User.find({ where: { fbId } });
  return user;
}

async function createUserUsingFacebookOAuth({ fbId, name, authToken, thumbnailUrl }) {
  const user = await User.create({
    fbId, name, authToken, thumbnailUrl,
  });
  return user;
}

exports.getById = async (userId) => {
  const user = await User.find({ where: { id: userId } });
  return user;
};
