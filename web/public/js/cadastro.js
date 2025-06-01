//  let listaEmpresasCadastradas = [];

function cadastrar() {
  aguardar();

  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo
  var nomeVar = ipt_nome.value;
  var emailVar = ipt_email.value;
  var senhaVar = ipt_senha.value;
  var genFavVar = sel_gosto_musical.value;

  // Verificando se há algum campo em branco
  if (
    nomeVar == "" ||
    emailVar == "" ||
    senhaVar == "" ||
    genFavVar == ""
  ) {
    finalizarAguardar("Mensagem de erro para todos os campos em branco");
    return false;

  } else if (!emailVar.includes('@') || !emailVar.includes('.')) {
     finalizarAguardar("O email precisa tem '@' e '.'");
    return false;

  } else if (emailVar.includes("'") || nomeVar.includes("'") || senhaVar.includes("'")) {
        finalizarAguardar("Campos não podem conter ' aspas simples por motivos técnicos");
    return false;

  } else if (senhaVar.length < 6) {
    finalizarAguardar("A senha precisa ter pelo menos 6 caracteres");
    return false;
  }
  else {
    setInterval(sumirMensagem, 5000);
  }

  // Enviando o valor da nova input
  fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      nomeServer: nomeVar,
      emailServer: emailVar,
      senhaServer: senhaVar,
      genFavServer: genFavVar
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        var sectionErrosLogin = document.getElementById("section_erros_login");
        sectionErrosLogin.innerHTML = 'Cadastro realizado com sucesso!'
        sectionErrosLogin.style.backgroundColor = '#FFF4B7';
        sectionErrosLogin.style.color = '#000000';
        sectionErrosLogin.style.display = 'flex';

        setTimeout(() => {
          window.location = "login.html";
        }, "2000");
      } else {
        throw "Houve um erro ao tentar realizar o cadastro!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      finalizarAguardar(resposta);
    });

  return false;
}

// Listando empresas cadastradas 
//   function listar() {
//     fetch("/empresas/listar", {
//       method: "GET",
//     })
//       .then(function (resposta) {
//         resposta.json().then((empresas) => {
//           empresas.forEach((empresa) => {
//             listaEmpresasCadastradas.push(empresa);

//             console.log("listaEmpresasCadastradas")
//             console.log(listaEmpresasCadastradas[0].codigo_ativacao)
//           });
//         });
//       })
//       .catch(function (resposta) {
//         console.log(`#ERRO: ${resposta}`);
//       });
//   }

function sumirMensagem() {
  cardErro.style.display = "none";
}