const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mediaAritmetica(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

function situacaoAluno(media) {
  if (media >= 7) {
    return "aprovado";
  } else if (media >= 5) {
    return "recuperação";
  } else {
    return "reprovado";
  }
}

rl.question("Digite a 1ª nota: ", function (n1) {
  rl.question("Digite a 2ª nota: ", function (n2) {
    rl.question("Digite a 3ª nota: ", function (n3) {
      const nota1 = parseFloat(n1);
      const nota2 = parseFloat(n2);
      const nota3 = parseFloat(n3);

      if (
        [nota1, nota2, nota3].some(
          (nota) => isNaN(nota) || nota < 0 || nota > 10,
        )
      ) {
        console.log("Nota inválida");
        rl.close();
        return;
      }

      const media = mediaAritmetica(nota1, nota2, nota3);

      console.log(`A média do aluno é: ${media.toFixed(2)}`);
      console.log(`O aluno está: ${situacaoAluno(media)}`);

      rl.close();
    });
  });
});
