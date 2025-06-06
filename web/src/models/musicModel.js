var database = require("../database/config");

function buscarmusicsPorEmpresa(empresaId) {

  var instrucaoSql = `SELECT * FROM music a WHERE fk_empresa = ${empresaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function comentar(texto, idUsuario, avaliacao, idTraducao) {

  var instrucaoSql = `INSERT INTO comentario(texto, fkusuario, avaliacao, fktraducao) VALUES ('${texto}', ${idUsuario}, ${avaliacao}, ${idTraducao})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMusicas() {
  var instrucaoSql = `select m.id, m.nome, m.artista, case when round(avg(c.avaliacao), 1) is not null then round(avg(c.avaliacao), 1) else 0 end as avaliacao, t.id as tid
                      from musica m
                      inner join traducao t
                          on m.id = t.fkmusica
                      left join comentario c 
                          on t.id = c.fktraducao
                      group by m.id, m.nome, m.artista, t.id;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMusicaPorID(idMusica) {
  console.log(idMusica, 'ID do model')
  var instrucaoSql = `select m.artista, m.nome, m.letra, t.letra_trad, m.urlYtb
                      from musica m
                      inner join traducao t
                          on m.id = t.fkmusica
                      where m.id = ${idMusica};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscaComentarioPorMusica(idMusica) {
  console.log(idMusica, 'ID do model')
  var instrucaoSql = `select u.nome, c.avaliacao, c.texto, c.id, u.id as Uid
                        from comentario c 
                        inner join usuario u
                            on c.fkusuario = u.id
                        inner join traducao t
                            on c.fktraducao = t.id
                        inner join musica m
                            on t.fkmusica = m.id
                        where m.id = ${idMusica};`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function deletar(idComentario) {
  var instrucaoSql = `DELETE FROM comentario WHERE id = ${idComentario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}



module.exports = {
  buscarmusicsPorEmpresa,
  comentar,
  buscarMusicas,
  buscarMusicaPorID,
  buscaComentarioPorMusica,
  deletar

}
