
function listarMusicas() {
	aguardar();
	let listaMusicas = [];
	let frase = ``;
	fetch(`/musics/musicas/`, {
		method: "GET"
	})
		.then(function (resposta) {
			resposta.json().then((musicas) => {
				musicas.forEach((musica) => {
					listaMusicas.push(musica);
				});
				for (let i = 0; i < listaMusicas.length; i++) {
					frase += `
		<div class="card" onclick="pegarID(${listaMusicas[i].id}, ${listaMusicas[i].tid})">
			<div class="card_left">
				<a href="musica.html">${listaMusicas[i].nome}</a>
				<p>${listaMusicas[i].artista}</p>
			</div>
			<div class="card_right">
				<p>${listaMusicas[i].avaliacao}<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
								class="bi bi-star-fill" viewBox="0 0 16 16">
								<path
									d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
				</svg></p>
			</div>
		</div>`
				}

				document.getElementById("card_musicas").innerHTML = frase;
				finalizarAguardar();
			});
		})
		.catch(function (resposta) {
			console.log(`#ERRO: ${resposta}`);;
		});
}

function pegarID(idMusica, idTraducao) {
	sessionStorage.ID_MUSICA = idMusica;
	sessionStorage.ID_TRADUCAO = idTraducao;
}