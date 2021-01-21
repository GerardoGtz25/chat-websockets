const express = require('express');
const response = require('../../network/response');
const router = express.Router();

const controller = require('./controller');

router.get('/', function (req, res) {
  controller
    .listUsers(req.body.name)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, 'Internalerror', 500, err);
    });
});

router.post('/', function (req, res) {
  controller
    .addUser(req.body.name)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, 'Internalerror', 500, err);
    });
});

module.exports = router;
