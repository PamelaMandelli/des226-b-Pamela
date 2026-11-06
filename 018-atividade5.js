const entrada = require("prompt-sync")();

const valorCompra = parseFloat(entrada("Insira o valor da compra: "));

const valorTotal = valorCompra > 150 ? valorCompra : valorCompra + 20;

console.log(`Valor total do pedido R$ ${valorTotal}`);
