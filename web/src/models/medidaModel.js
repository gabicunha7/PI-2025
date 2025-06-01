var database = require("../database/config");

function buscarGraficoBarra() {

    var instrucaoSql = `select m.nome,  case when round(avg(c.avaliacao), 1) is not null then round(avg(c.avaliacao), 1) else 0 end as avaliacao
                        from musica m
                        inner join traducao t
                                on m.id = t.fkmusica
                        left join comentario c 
                                on t.id = c.fktraducao
                        group by m.nome
                        order by avaliacao desc limit 3;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function musicaMaisComentada() {

    var instrucaoSql = `select m.nome, count(c.fktraducao) contagem
                        from musica m
                        inner join traducao t
                                on m.id = t.fkmusica
                        inner join comentario c 
                                on t.id = c.fktraducao
                        group by m.nome
                        order by count(c.fktraducao) desc limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function musicaMelhorAvaliada() {

    var instrucaoSql = `select m.nome
                        from musica m
                        inner join traducao t
                                on m.id = t.fkmusica
                        inner join comentario c 
                                on t.id = c.fktraducao
                        group by m.nome
                        order by round(avg(c.avaliacao), 1) desc limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function usuarioMaisComenta() {

    var instrucaoSql = `select u.nome, count(u.nome) contagem 
                        from comentario c 
                        inner join usuario u
                                on u.id = c.fkusuario
                        group by u.nome
                        order by count(u.nome) desc limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarGraficoPizza() {

    var instrucaoSql = `select u.genfav genfav, count(genfav) quantidade
    from usuario u
    group by u.genfav;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    musicaMaisComentada,
    musicaMelhorAvaliada,
    usuarioMaisComenta,
    buscarGraficoPizza,
    buscarGraficoBarra
}
