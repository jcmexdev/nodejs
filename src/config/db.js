const db = require("mongoose");
const config = require("./config");

db.Promise = global.Promise;

const url = `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`;

function connect() {
  db.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log(`[DB] connection successfully`);
    })
    .catch((error) => {
      console.error(`[ERROR][DB] database connection fail`);
      console.error(error);
    });
}

module.exports = { connect };
