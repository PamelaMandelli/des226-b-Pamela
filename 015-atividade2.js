const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function validarAcesso(idade, acompanhado, bloqueado) {
  if (bloqueado === true) {
    return "acesso bloqueado";
  }
  if (idade >= 18 || (idade >= 16 && acompanhado === true)) {
    return "acesso liberado";
  } else {
    return "acesso negado";
  }
}

rl.question("qual é a idade?", function (idadeInput) {
  let entradaIdade = parseInt(idadeInput);

  rl.question(
    "a pessoa está acompanhada? sim/não",
    function (acompanhadoInput) {
      let respostaAcompanhado = acompanhadoInput.toLowerCase().trim();
      let estaAcompanhado =
        respostaAcompanhado === "sim" || respostaAcompanhado === "s";

      rl.question(
        "a pessoa está bloqueada no sistema? sim/não",
        function (bloqueadoInput) {
          let respostaBloqueada = bloqueadoInput.toLowerCase().trim();
          let estaBloqueado =
            respostaBloqueada === "sim" || respostaBloqueada === "s";

          let resultado = validarAcesso(
            entradaIdade,
            estaAcompanhado,
            estaBloqueado,
          );

          console.log("\nresultado da verificação  " + resultado);

          rl.close();
        },
      );
    },
  );
});
