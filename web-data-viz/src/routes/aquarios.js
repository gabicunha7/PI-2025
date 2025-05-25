var express = require("express");
var router = express.Router();

var aquarioController = require("../controllers/aquarioController");

router.get("/:empresaId", function (req, res) {
  aquarioController.buscarAquariosPorEmpresa(req, res);
});

router.get("/musicas", function (req, res) {
  aquarioController.buscarMusicas(req, res);
});

router.get("/letra/:idMusica", function (req, res) {
  aquarioController.buscarLetraMusica(req, res);
});

router.get("/comentarios/:idMusica", function (req, res) {
  aquarioController.buscaComentarioPorMusica(req, res);
});

router.post("/musicas/comentar/:idUsuario", function (req, res) {
  aquarioController.comentar(req, res);
})

module.exports = router;