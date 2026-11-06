let i = 1;

console.log("🚀 Iniciando contagem na mesma linha...\n");

const intervalo = setInterval(() => {
  //Limpa a linha atual do terminal e move o cursor para o inicio (coluna 0)
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);

  //Escreve o numero atual na mesma linha
  process.stdout.write(`Contagem: ${i}`);

  if (i === 10) {
    clearInterval(intervalo); // para o contador quando chega a 10
    console.log("\n\n✅ Fim da contagem!");
  }

  i++;
}, 3000); // 3000 milissegundos = 3 segundos
