const Service = require('../../service');

module.exports = async function postSignUser(params) {
  const user = await Service.User.sign(params);
  return user;
};
