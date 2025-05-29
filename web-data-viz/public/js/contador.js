
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
let valorEstrela = 1;
let listaDadosBanco = [];
let listaComentarios = [];

function exibirLetraMusica() {
  let letraOriginal = ``;
  let letraTraduzida = ``;
  let idMusica = sessionStorage.getItem("ID_MUSICA")
  fetch(`/musics/letra/${idMusica}`, {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((letras) => {
        letras.forEach((letra) => {
          listaDadosBanco.push(letra);

          let trechos = []
          let letraMusica = listaDadosBanco[0].letra.split("\n");
          let trechosTrad = []
          let letraMusicaTrad = listaDadosBanco[0].letra_trad.split("\n");
          for (let i = 0; i < letraMusica.length; i++) {
            trechos.push(letraMusica[i]);
            trechosTrad.push(letraMusicaTrad[i]);
            letraOriginal += `<p class="original" lang="en">${trechos[i]}</p>`;
            letraTraduzida  += `<p class="traducao" lang="en">${trechosTrad[i]}</p>`;
          }
        
          letra_musica.innerHTML = letraOriginal;
          letra_traducao.innerHTML = letraTraduzida;
          titulo.innerHTML = listaDadosBanco[0].nome;
          artista.innerHTML = listaDadosBanco[0].artista;
          video_youtube.innerHTML = `<iframe width="560" height="315" src="${listaDadosBanco[0].urlYtb}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;


        });

      });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);;
    });
}

function buscarComentarioPeloId() {
  let frase = ``;
  let idMusica = sessionStorage.getItem("ID_MUSICA")
  fetch(`/musics/comentarios/${idMusica}`, {
    method: "GET"
  })
    .then(function (resposta) {
      resposta.json().then((comentarios) => {
        comentarios.forEach((comentario) => {
          listaComentarios.push(comentario);
        });
        for (let i = 0; i < listaComentarios.length; i++) {
          frase += `<div id="comentario" class="comentario">
            <div id="sobre_user">
              <h1>${listaComentarios[i].nome}</h1>
              <p>${listaComentarios[i].avaliacao}
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                class="bi bi-star-fill" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg></p>
            </div>
            <div id="baixo_comentario">
              <p>${listaComentarios[i].texto}</p>
              <svg class="deletar" onclick="pegarIDcomentario(${listaComentarios[i].id}, ${listaComentarios[i].Uid})" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
              </svg>
            </div>
          </div>`
        }
        caixa_comentarios.innerHTML = frase;
      });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);;
    });
}

function comentar() {
  var idUsuario = sessionStorage.ID_USUARIO;

  if (ipt_comentario.value != undefined && ipt_comentario.value != null && ipt_comentario.value != ''
    && valorEstrela != undefined && valorEstrela != null && valorEstrela != '') {
    var corpo = {
      texto: ipt_comentario.value,
      avaliacao: valorEstrela,
      idTraducao: sessionStorage.getItem("ID_TRADUCAO")
    }
    console.log('este é o corpo', corpo)

    fetch(`/musics/musicas/comentar/${idUsuario}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(corpo)
    }).then(function (resposta) {

      console.log("resposta: ", resposta);

      if (resposta.ok) {
        // window.location = "/dashboard/musica.html";
        limparFormulario();
        buscarComentarioPeloId();
        return false;

      } else if (resposta.status == 404) {
        window.alert("Deu 404!");
      } else {
        throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

    return false;
  } else {
    return alert('Preencha o comentário.')
  }

}


function limparFormulario() {
  document.getElementById("sessao_comentarios").reset();
}

document.addEventListener('click', function (e) {
  var estrelas = e.target.parentElement.getElementsByClassName('star-icon');
  estrelas = Array.from(estrelas);
  var classeEstrela = e.target.classList;

  if (!classeEstrela.contains('ativo') && classeEstrela.contains('star-icon')) {
    estrelas.forEach(function (estrela) {
      estrela.classList.remove('ativo');
    });
    classeEstrela.add('ativo');
    valorEstrela = e.target.getAttribute('data-avaliar');
    console.log(e.target.getAttribute('data-avaliar'));
  }
})

function pegarIDcomentario(idComentario, idUsuarioComentario) {
  sessionStorage.ID_COMENTARIO = idComentario;
  sessionStorage.ID_USUARIO_COMENTOU = idUsuarioComentario;
  deletar(idComentario, idUsuarioComentario);
}

function deletar(idComentario, idUsuarioComentario) {
  var idUsuario = sessionStorage.ID_USUARIO;

  if (idUsuario == idUsuarioComentario) {
        console.log("Criar função de apagar post escolhido - ID " + idComentario);
        fetch(`/musics/musicas/deletar/${idComentario}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (resposta) {

            if (resposta.ok) {
                window.location = "/dashboard/musica.html"
            } else if (resposta.status == 404) {
                window.alert("Deu 404!");
            } else {
                throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
  } else {
    alert('Você não pode deletar um comentario que não foi feito por você.')
  }
}


