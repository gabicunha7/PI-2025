var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});


router.get("/musmaiscom", function (req, res) {
    medidaController.buscarMusicaMaisComentada(req, res);
});

router.get("/usumais", function (req, res) {
    medidaController.buscarUsuarioMaisComenta(req, res);
});

router.get("/musmelhorava", function (req, res) {
    medidaController.buscarMusicaMelhorAvaliada(req, res);
});

router.get("/pizza", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;