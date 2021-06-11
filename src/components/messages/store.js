const messages = [];

function create(message) {
  messages.push(message);
}

/**
 * Return all messages
 * @returns {Array} messages list
 */
function all() {
  return messages;
}

module.exports = {
  create,
  all,
};
