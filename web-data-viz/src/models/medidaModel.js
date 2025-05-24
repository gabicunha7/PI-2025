var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    FROM medida
                    WHERE fk_aquario = ${idAquario}
                    ORDER BY id DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealaquario(idAquario) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

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

function buscarMedidasEmTempoReal() {

    var instrucaoSql = `select u.genfav genfav, count(genfav) quantidade
                        from usuario u
                        group by u.genfav;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    musicaMaisComentada,
    musicaMelhorAvaliada,
    usuarioMaisComenta,
    buscarGraficoPizza
}
