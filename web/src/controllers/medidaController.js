var medidaModel = require("../models/medidaModel");

function buscarGraficoPizza(req, res) {

    medidaModel.buscarGraficoPizza().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUsuarioMaisComenta(req, res) {

    medidaModel.usuarioMaisComenta().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o usuario que mais comenta", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMusicaMelhorAvaliada(req, res) {

    medidaModel.musicaMelhorAvaliada().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar música melhor avaliada", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMusicaMaisComentada(req, res) {

    medidaModel.musicaMaisComentada().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a música mais comentada.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarGraficoBarra(req, res) {

    medidaModel.buscarGraficoBarra().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



module.exports = {
    buscarGraficoPizza,
    buscarUsuarioMaisComenta,
    buscarMusicaMelhorAvaliada,
    buscarMusicaMaisComentada,
    buscarGraficoBarra
}