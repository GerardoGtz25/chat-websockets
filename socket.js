const scoektIO = require('socket.io');
const socket = {};

function connect(server) {
  socket.io = scoektIO(server);
}

module.exports = {
  connect,
  socket,
};
