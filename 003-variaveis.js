let entrada = require("prompt-sync")();
// comentário de 1 linha
let nome = "Pamela"; // string ex: "qualquer coisa"
let idade = 33; // number ex: 10, 18.23
let trabalha = true; // boolean ex: true, false
let endereco = {
  rua: "brasil",
  num: 40,
  bairro: "centro",
}; // object ex: padrão chave/valor
let funcao = () => console.log("Oi"); // function ex: bloco de código

/*
comentario 
de mais 
uma linha
*/

//Exibindo tipos das variáveis
console.log("Tipos de variáveis");
console.log("Variável: nome:  " + typeof nome);
console.log("Variável: idade:  " + typeof idade);
console.log("Variável: trabalha:  " + typeof trabalha);
console.log("Variável: endereco:  " + typeof endereco);
console.log("Variável: funcao:  " + typeof funcao);

//variáveis definidas sem valor
let nomeDigitado;
let idadeDigitada;
let trabalhaDigitado;

console.log(); //pula uma linha

//passando valor para as variáveis
nomeDigitado = entrada("Digite seu nome: ");
idadeDigitada = entrada("Qual sua idade? ");
trabalhaDigitado = entrada("Você trabalha? ");

//Mostrando valor e tipo das variáveis
console.log("Nome: " + nomeDigitado + " -Tipo: " + typeof nomeDigitado);
console.log("Idade: " + idadeDigitada + " -Tipo: " + typeof idadeDigitada);
console.log(
  "Trabalha: " + trabalhaDigitado + " -Tipo: " + typeof trabalhaDigitado,
);
