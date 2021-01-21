const store = require('./store');

function addUser(name) {
  if (!name) {
    return Promise.reject('Nombre invalido');
  }

  const user = {
    name,
  };

  return store.addUser(user);
}

function listUsers() {
  return store.listUsers();
}

module.exports = {
  addUser,
  listUsers,
};
