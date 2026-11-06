const entrada = require("prompt-sync")();

//controle da repetiçao no inicio
let contador = 0;

while (contador < 10) {
  contador = contador + 1;
  console.log(contador);
}

entrada("Pressione ENTER para encerrar o programa");
