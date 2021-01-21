const db = require('mongoose');
const config = require('./config');

const url = config.dbUrl;

db.Promise = global.Promise;

async function connect() {
  await db
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('[db] Conectada con éxito'))
    .catch((err) => console.error('[db]', err));
}

module.exports = connect;
