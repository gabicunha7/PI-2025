
// function exibirLetraMusica() {
//   JSON.parse(sessionStorage.MUSICAS).forEach(item => {
//     document.getElementById("card_musicas").innerHTML += `
// 		<div class="card" onclick="pegarID(${item.id})">
// 			<div class="card_left">
// 				<a href="musica.html">${item.nome}</a>
// 				<p>${item.artista}</p>
// 			</div>
// 			<div class="card_right">
// 				<p>${item.avaliacao}<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
// 								class="bi bi-star-fill" viewBox="0 0 16 16">
// 								<path
// 									d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
// 				</svg></p>
// 			</div>
// 		</div>`
//   });
// }

let listaDadosBanco = [];
let listaComentarios = [];

function exibirLetraMusica() {
  let idMusica = sessionStorage.getItem("ID_MUSICA")
  fetch(`/aquarios/letra/${idMusica}`, {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((letras) => {
        letras.forEach((letra) => {
          listaDadosBanco.push(letra);

          // console.log("listaBD");
          //console.log(listaDadosBanco[0]);
          let trechos = []
          let letraMusica = listaDadosBanco[0].letra.split("\n");
          let trechosTrad = []
          let letraMusicaTrad = listaDadosBanco[0].letra_trad.split("\n");
          for (let i = 0; i < letraMusica.length; i++) {
            trechos.push(letraMusica[i]);
            trechosTrad.push(letraMusicaTrad[i]);
            letra_musica.innerHTML += `<p class="original" lang="en">${trechos[i]}</p>`;
            letra_traducao.innerHTML += `<p class="traducao" lang="en">${trechosTrad[i]}</p>`;
          }

          titulo.innerHTML = listaDadosBanco[0].nome;
          artista.innerHTML = listaDadosBanco[0].artista;


        });
      });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);;
    });
}

function buscarComentarioPeloId() {
  let idMusica = sessionStorage.getItem("ID_MUSICA")
  fetch(`/aquarios/comentarios/${idMusica}`, {
    method: "GET"
  })
    .then(function (resposta) {
      resposta.json().then((comentarios) => {
        comentarios.forEach((comentario) => {
          listaComentarios.push(comentario);

          console.log("listaComentarios");
          console.log(listaComentarios);
        });
        for(let i = 0; i < listaComentarios.length; i++){
          console.log('listando um comentario');
          caixa_comentarios.innerHTML += `<div id="comentario" class="comentario">
            <div id="sobre_user">
              <h1>${listaComentarios[i].nome}</h1>
              <p>${listaComentarios[i].avaliacao}
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                class="bi bi-star-fill" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg></p>
            </div>
            <p>${listaComentarios[i].texto}</p>
          </div>`
        }
      });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);;
    });
}
  
  

/// percorrer dado do sql, distribuir em traducao e original, colocando lado a lado
// ideia, fazer um loop, pegar dados do sql, adicionar na array(cortados pelo \n)
// e retirar os \ do sql usados para ignorar o '
// com isso para cada item da array gerar uma tag p com o conteudo dentro...
// tentarei fazer isso, acho possível