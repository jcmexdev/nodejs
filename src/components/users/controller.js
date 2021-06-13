const store = require("./store");

function getUsers() {
  return new Promise((resolve, _) => {
    resolve(store.all());
  });
}

function createUser(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject("Bad request");
    }
    resolve(store.create({ name }));
  });
}

function updateUser(id, name) {
  return new Promise((resolve, reject) => {
    if (!id || !name) {
      reject("Bad request");
    }
    resolve(store.update(id, name));
  });
}

function deleteUser(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject("Bad request");
    }
    resolve(store.remove(id));
  });
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
