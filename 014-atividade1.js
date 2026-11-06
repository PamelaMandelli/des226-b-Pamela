const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("digite um número para começar:", (entrada) => {
  let numero = parseInt(entrada);
  if (numero % 2 === 0) {
    console.log("esse número é par");
  } else {
    console.log("esse número é impar");
  }
  if (numero > 0) {
    console.log("esse número é positivo");
  } else {
    if (numero < 0) {
      console.log("esse número é negativo");
    } else {
      console.log("esse número é zero");
    }
  }
  rl.close();
});
