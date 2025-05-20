var database = require("../database/config");

function buscarAquariosPorEmpresa(empresaId) {

  var instrucaoSql = `SELECT * FROM aquario a WHERE fk_empresa = ${empresaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(empresaId, descricao) {

  var instrucaoSql = `INSERT INTO (descricao, fk_empresa) aquario VALUES (${descricao}, ${empresaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMusicas() {
  var instrucaoSql = `select m.id, m.nome, m.artista, round(avg(c.avaliacao), 1) as avaliacao
                      from musica m
                      inner join traducao t
                          on m.id = t.fkmusica
                      inner join comentario c 
                          on t.id = c.fktraducao
                      group by m.id, m.nome, m.artista;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMusicaPorID(idMusica) {
  console.log(idMusica, 'ID do model')
  var instrucaoSql = `select m.artista, m.nome, m.letra, t.letra
                      from musica m
                      inner join traducao t
                          on m.id = t.fkmusica
                      where m.id = ${idMusica};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}



module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar,
  buscarMusicas,
  buscarMusicaPorID
}
