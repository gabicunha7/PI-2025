var express = require("express");
var router = express.Router();

var musicController = require("../controllers/musicController");

router.get("/musicas", function (req, res) {
  musicController.buscarMusicas(req, res);
});

router.get("/letra/:idMusica", function (req, res) {
  musicController.buscarLetraMusica(req, res);
});

router.get("/comentarios/:idMusica", function (req, res) {
  musicController.buscaComentarioPorMusica(req, res);
});

router.post("/musicas/comentar/:idUsuario", function (req, res) {
  musicController.comentar(req, res);
})

module.exports = router;