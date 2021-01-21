const Model = require('./model');

function addUser(user) {
  const newUser = new Model(user);
  return newUser.save();
}

function listUsers() {
  return Model.find();
}

module.exports = {
  addUser,
  listUsers,
};
