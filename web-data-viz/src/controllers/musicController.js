var musicModel = require("../models/musicModel");

function buscarmusicsPorEmpresa(req, res) {
  var idUsuario = req.params.idUsuario;

  musicModel.buscarmusicsPorEmpresa(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os musics: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function deletar(req, res) {
  let idComentario = req.params.idComentario;

  musicModel.deletar(idComentario)
    .then((resultado) => {
      res.status(201).json(resultado);
    }
    ).catch((erro) => {
      console.log(erro);
      console.log(
        "\nHouve um erro ao deletar o comentario! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}


function comentar(req, res) {
  var texto = req.body.texto;
  var idUsuario = req.params.idUsuario;
  var avaliacao = req.body.avaliacao;
  var idTraducao = req.body.idTraducao;

  if (texto == undefined) {
    res.status(400).send("texto está undefined!");
  } else if (avaliacao == undefined) {
    res.status(400).send("avaliacao está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else if (idTraducao == undefined) {
    res.status(400).send("idTraducao está undefined!");
  } else {


    musicModel.comentar(texto, idUsuario, avaliacao, idTraducao)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o comentario! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}


function buscarMusicas(req, res) {
  musicModel.buscarMusicas().then((resultado) => {
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
  console.log(idMusica, 'ID do contoller')
  musicModel.buscarMusicaPorID(idMusica).then((resultado) => {
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
  console.log(idMusica, 'ID do contoller')
  musicModel.buscaComentarioPorMusica(idMusica).then((resultado) => {
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
  buscarmusicsPorEmpresa,
  comentar,
  buscarMusicas,
  buscarLetraMusica,
  buscaComentarioPorMusica,
  deletar
}