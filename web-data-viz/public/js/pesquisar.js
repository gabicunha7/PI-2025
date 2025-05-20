
function exibirAquarios() {
	JSON.parse(sessionStorage.AQUARIOS).forEach(item => {
		document.getElementById("cardAquarios").innerHTML += `
                    <div class="card-aquario">
                        <div class="title-aquario">
                            <h1>${item.descricao}</h1>
                        </div>
                        <div class="desc-aquario">
                        <div class="temperatura">
                            <p id="temp_aquario_${item.id}">-°C</p>
                        </div>
                        <div class="cor-alerta" id="card_${item.id}"></div>
                    </div>
                    </div>
                    `
	});
}


function exibirMusicas() {
	JSON.parse(sessionStorage.MUSICAS).forEach(item => {
		document.getElementById("card_musicas").innerHTML += `
		<div class="card" onclick="pegarID(${item.id})">
			<div class="card_left">
				<a href="musica.html">${item.nome}</a>
				<p>${item.artista}</p>
			</div>
			<div class="card_right">
				<p>${item.avaliacao}<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
								class="bi bi-star-fill" viewBox="0 0 16 16">
								<path
									d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
				</svg></p>
			</div>
		</div>`
	});
}

function pegarID(idMusica){
	sessionStorage.ID_MUSICA = idMusica;
}