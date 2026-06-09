// _____________________________________________________________________________________________________________________

// ESTRUTURAS CONDICIONAIS
let mediaDasNotas = 7;

// If
// Executa um bloco de código quando a condição é verdadeira
if (mediaDasNotas >= 6) {
  console.log("Aprovado");
}

// _____________________________________________________________________________________________________________________

// If / Else
// Executa um bloco se a condição for verdadeira e outro se for falsa
if (mediaDasNotas >= 6) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// _____________________________________________________________________________________________________________________

// Else If
// Permite testar múltiplas condições em sequência
if (mediaDasNotas >= 9) {
  console.log("Aprovação com mérito");
} else if (mediaDasNotas >= 6) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// _____________________________________________________________________________________________________________________

// Operador Ternário
// Forma reduzida de escrever uma condição simples
mediaDasNotas >= 6 ? console.log("Aprovado") : console.log("Reprovado");

// _____________________________________________________________________________________________________________________

// Switch
// Executa blocos de código com base em diferentes valores possíveis
let day = 2;
// day = 0;

switch (day) {
  case 1:
    console.log("Domingo");
    break;

  case 2:
    console.log("Segunda-feira");
    break;

  case 3:
    console.log("Terça-feira");
    break;

  default:
    console.log("Dia inválido"); // Se nenhum case for encontrado, o bloco default será executado
}

// _____________________________________________________________________________________________________________________

// LAÇOS DE REPETIÇÃO (LOOPS)
// Permitem repetir um bloco de código várias vezes

// While
// Repete um bloco de código enquanto uma condição for verdadeira
let i = 1;

while (i <= 5) {
  console.log("i: " + i);
  i++;
}

// _____________________________________________________________________________________________________________________

// Do While
// Executa o bloco ao menos uma vez e continua repetindo enquanto a condição for verdadeira
let j = 1;

do {
  console.log("j: " + j);
  j++;
} while (j <= 5);

/* Loop infinito
Ocorre quando a condição de parada nunca é atingida

while (true) {
  console.log("Loop infinito");
}

Como evitar: Certifique-se de que a variável de controle seja atualizada corretamente */

// _____________________________________________________________________________________________________________________

// For
// Utilizado quando a quantidade de repetições é conhecida e há uma variável de controle
for (let k = 1; k <= 5; k++) {
  console.log("k: " + k);
}
