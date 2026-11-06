const entrada = require("prompt-sync");

const codProd = entrada("Digite o código do produto: ");

switch (codProd) {
  case "A1":
    console.log("A1, Bolacha Recheada, R$ 6,00");
    break;
  case "B2":
    console.log("B2, Bolacha sem Recheio, R$ 2,00");
    break;
  case "C3":
    console.log("C3, Bolacha Salgada, R$ 4,00");
    break;

  default:
    console.log("Produto não identificado");
    break;
}
