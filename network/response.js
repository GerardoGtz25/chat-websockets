exports.success = function (req, res, message, status) {
  res.status(status || 200).send({
    error: "",
    body: message,
  });
};

exports.error = function (req, res, error, status, message) {
  console.log(message);
  res.status(status || 500).send({
    error,
    body: "",
  });
};
