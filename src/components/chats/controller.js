const store = require("./store");

async function getChats(userId = null) {
  try {
    return await store.all(userId);
  } catch (error) {
    throw new Error(error);
  }
}

function createChat(users) {
  return new Promise((resolve, reject) => {
    if (!users || !Array.isArray(users) || users.length == 0) {
      reject(`Invalid data`);
    }
    resolve(store.create({ users }));
  });
}

function deleteChat(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject(`Invalid data`);
    }
    const deleted = store.remove(id);
    resolve(deleted);
  });
}

module.exports = {
  getChats,
  createChat,
  deleteChat,
};
