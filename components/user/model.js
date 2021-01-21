const mongoose = require('mongoose');

const Schemma = mongoose.Schema;

const mySchema = new Schemma({
  name: String,
});

const model = mongoose.model('Users', mySchema);

module.exports = model;
