var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

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
    medidaController.buscarGraficoPizza(req, res);
});

router.get("/barra", function (req, res) {
    medidaController.buscarGraficoBarra(req, res);
});

module.exports = router;