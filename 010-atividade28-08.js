const prompt = require("prompt-sync")();

// 1. Instanciar a data atual
const dataAtual = new Date();

// 2. Solicitar nome e matrícula do aluno
const nome = prompt("Digite o nome do aluno: ");
const matricula = prompt("Digite a matrícula do aluno: ");

// 3. Array com 3 disciplinas
const disciplinas = ["Programação", "Banco de Dados", "Desenvolvimento Web"];

// 4. Função arrow para registrar e exibir o log
const registrarLog = (nome, matricula, disciplinas, data) => {
  console.log("\n===== REGISTRO DE ACESSO =====");
  console.log("Nome:", nome);
  console.log("Matrícula:", matricula);
  console.log("Disciplinas:", disciplinas.join(", "));
  console.log("Data e hora:", data.toLocaleString());
  console.log("==============================");
};

// Executar a função
registrarLog(nome, matricula, disciplinas, dataAtual);

// 5. Exibir o tipo da variável data e o tipo da função
console.log("\nTipo da variável data:", typeof dataAtual);
console.log("Tipo da função:", typeof registrarLog);
