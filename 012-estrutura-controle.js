let entrada = require("prompt-sync")();

let usuario = "klofis";
let senha = "1475369";
let usOk = false;
let snOk = false;
let acessoPermitido = false;

console.log("Insira seus dados para acessar o sistema!");

let loginUsuario = entrada("Nome de usuário: ");
let loginSenha = entrada("Senha: ");

if (usuario == loginUsuario.toLowerCase()) {
  console.log("Nome de usuário verificado com sucesso!");
  usOk = true;
}

if (senha == loginSenha) {
  console.log("Senha verificado com sucesso!");
  snOk = true;
}

if (usOk === true) {
  if ((snOk = true)) {
    acessoPermitido = true;
  }
}

if (acessoPermitido === true) {
  console.log("Acesso Permitido!");
} else {
  console.log("Acesso negado!");
}

entrada("Pressione enter para finalizar o programa!");
