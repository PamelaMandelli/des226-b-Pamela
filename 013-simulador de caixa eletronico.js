const entrada = require("prompt-sync")();

const usuarios = [
  {
    login: "Pamela",
    senha: "12345",
    saldo: 1000,
  },
  {
    login: "Lais",
    senha: "abc123",
    saldo: 500,
  },
  {
    login: "Nicoly",
    senha: "senha123",
    saldo: 0,
  },
];

const login = entrada("Digite seu login: ").trim();
const senha = entrada("Digite sua senha: ").trim();

let usuarioEncontrado = null;

for (const usuario of usuarios) {
  if (usuario.login.toLowerCase() === login.toLowerCase()) {
    usuarioEncontrado = usuario;
    break;
  }
}

if (!usuarioEncontrado) {
  console.log("Usuário ou senha incorretos.");
} else if (usuarioEncontrado.senha !== senha) {
  console.log("Usuário ou senha incorretos.");
} else {
  console.log("Acesso permitido!");

  let saldo = usuarioEncontrado.saldo;
  console.log("Saldo disponível: R$ " + saldo);
  let saque = Number(entrada("Digite o valor que deseja sacar: "));

  if (saque > 0 && saque <= saldo) {
    saldo = saldo - saque;

    let notas50 = Math.floor(saque / 50);
    let resto = saque % 50;

    console.log("Novo saldo: R$ " + saldo);
    console.log("Notas de R$ 50: " + notas50);
    console.log("Valor restante para notas menores: R$ " + resto);
  } else {
    console.log("Saque inválido: saldo insuficiente.");
  }
}
