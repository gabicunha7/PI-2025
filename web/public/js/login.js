
function entrar() {
	aguardar();

	var emailVar = ipt_email.value;
	var senhaVar = ipt_senha.value;

	if (emailVar == "" || senhaVar == "") {
		finalizarAguardar("Mensagem de erro para todos os campos em branco");
		return false;
	} else if (emailVar.includes("'") || senhaVar.includes("'")) {
		finalizarAguardar("Campos não podem conter '");
		return false;
	} else if (senhaVar.length < 6) {
		finalizarAguardar("A senha precisa ter pelo menos 6 caracteres");
		return false;
	}
	else {
		setInterval(sumirMensagem, 5000)
	}

	console.log("FORM LOGIN: ", emailVar);
	console.log("FORM SENHA: ", senhaVar);

	fetch("/usuarios/autenticar", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			emailServer: emailVar,
			senhaServer: senhaVar
		})
	}).then(function (resposta) {
		console.log("ESTOU NO THEN DO entrar()!")

		if (resposta.ok) {
			console.log(resposta);

			resposta.json().then(json => {
				console.log(json);
				console.log(JSON.stringify(json));
				sessionStorage.ID_USUARIO = json.id;
				sessionStorage.NOME_USUARIO = json.nome;
				sessionStorage.EMAIL_USUARIO = json.email;
				sessionStorage.FAVORITO_USUARIO = json.genFav;
				// sessionStorage.MUSICAS = JSON.stringify(json.musicas)

				setTimeout(function () {
					window.location = "./dashboard/bemvindo.html";
				}, 1000); // apenas para exibir o loading

			});

		} else {

			console.log("Houve um erro ao tentar realizar o login!");

			resposta.text().then(texto => {
				console.error(texto);
				finalizarAguardar(texto);
			});
		}

	}).catch(function (erro) {
		console.log(erro);
	})

	return false;
}

function sumirMensagem() {
	cardErro.style.display = "none"
}