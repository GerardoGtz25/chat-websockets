const express = require('express');
const multer = require('multer');
const response = require('../../network/response');
const router = express.Router();

const controller = require('./controller');

const upload = multer({
  dest: 'public/files/',
});

router.get('/', function (req, res) {
  const filterUser = req.query.user || null;
  controller
    .getMessages(filterUser)
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Unexpected Server Error', 500, e);
    });
});

router.post('/', upload.single('file'), function (req, res) {
  controller
    .addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch((e) => {
      response.error(req, res, 'Informacion invalida', 400);
    });
});

router.patch('/:id', function (req, res) {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Informacion invalida', 500);
    });
});

router.delete('/:id', function (req, res) {
  controller
    .deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
    })
    .catch((e) => {
      console.log(e);
      response.error(req, res, 'Error interno', 500);
    });
});

module.exports = router;

// router.get('/', function(req, res){
//   console.log(req.headers)
//   console.log(req.body);
//   console.log(req.query);
//   console.log('Prueba');
//   res.header({
//     "custom-header": "Nuestro valor personalizado"
//   });
//   res.status(200).send({error: '', body: 'Creado correctamente'});
// });
