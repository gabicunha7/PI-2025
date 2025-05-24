var aquarioModel = require("../models/aquarioModel");

function buscarAquariosPorEmpresa(req, res) {
  var idUsuario = req.params.idUsuario;

  aquarioModel.buscarAquariosPorEmpresa(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrar(req, res) {
  var descricao = req.body.descricao;
  var idUsuario = req.body.idUsuario;

  if (descricao == undefined) {
    res.status(400).send("descricao está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {


    aquarioModel.cadastrar(descricao, idUsuario)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}


function buscarMusicas(req, res) {
  aquarioModel.buscarMusicas.then((resultado) => {
    if (resultado.length > 0) {
      console.log(resultado);
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao listar músicas: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function buscarLetraMusica(req, res) {
  var idMusica = req.params.idMusica;
  console.log(idMusica,'ID do contoller')
  aquarioModel.buscarMusicaPorID(idMusica).then((resultado) => {
    if (resultado.length > 0) {
      console.log(resultado);
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar letra música: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function buscaComentarioPorMusica(req, res) {
  var idMusica = req.params.idMusica;
  console.log(idMusica,'ID do contoller')
  aquarioModel.buscaComentarioPorMusica(idMusica).then((resultado) => {
    if (resultado.length > 0) {
      console.log(resultado);
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar comentarios música: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar,
  buscarMusicas,
  buscarLetraMusica,
  buscaComentarioPorMusica
}