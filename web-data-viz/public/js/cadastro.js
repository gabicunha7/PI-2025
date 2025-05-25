//  let listaEmpresasCadastradas = [];

  function cadastrar() {
    // aguardar();

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
      cardErro.style.display = "block";
      mensagem_erro.innerHTML =
        "(Mensagem de erro para todos os campos em branco)";

      finalizarAguardar();
      return false;

    } else if(!emailVar.includes('@') || !emailVar.includes('.')){
      cardErro.style.display = "block";
      mensagem_erro.innerHTML =
        "O email precisa tem '@' e '.'";

      finalizarAguardar();
      return false;

    } else if(senhaVar.length < 6){
      cardErro.style.display = "block";
      mensagem_erro.innerHTML =
        "A senha precisa ter pelo menos 6 caracteres";
      finalizarAguardar();
      return false;
    }
    else {
      setInterval(sumirMensagem, 5000);
    }

    // Verificando se o código de ativação é de alguma empresa cadastrada
//     for (let i = 0; i < listaEmpresasCadastradas.length; i++) {
//       if (listaEmpresasCadastradas[i].codigo_ativacao == codigoVar) {
//         idEmpresaVincular = listaEmpresasCadastradas[i].id
//         console.log("Código de ativação válido.");
//         break;
//       } else {
//         cardErro.style.display = "block";
//         mensagem_erro.innerHTML = "(Mensagem de erro para código inválido)";
//         finalizarAguardar();
//       }
//     }

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
          cardErro.style.display = "block";

          mensagem_erro.innerHTML =
            "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

          setTimeout(() => {
            window.location = "login.html";
          }, "2000");

          limparFormulario();
          finalizarAguardar();
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
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