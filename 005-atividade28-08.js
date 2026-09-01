let entrada = require("prompt-sync");

let nome = entrada("Digite seu nome");
let profissao = entrada("Digite sua profissao");
let ano = entrada("Digite o ano em que nasceu");

console.log("Nome: " + nome);
console.log("Profissao: " + profissao);
console.log("Ano de nascimento: " + ano);

console.log("Nome: " + typeof nome);
console.log("Profissao: " + typeof profissao);
console.log("Ano de nascimento: " + typeof ano);
