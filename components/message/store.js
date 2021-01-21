const Model = require('./model');

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterUser !== null) {
      filter = { user: filterUser };
    }
    Model.find(filter)
      .populate('user')
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
  });
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({ _id: id });
  console.log('FOUND MESSAGE', foundMessage);
  foundMessage.message = message;
  return await foundMessage.save();
}

function removeMessage(id) {
  return Model.deleteOne({
    _id: id,
  });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText,
  removeMessage,
};

// DB_USER = db_user_express_videos;
// DB_PASSWORD = a5grwl74eJ5OUrfz;
// DB_HOST = cluster0.a8ohg.mongodb.net;
// DB_NAME = expressvideos_db;
