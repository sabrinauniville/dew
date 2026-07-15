// Soma de dois valores (versão com erro)
let number1 = prompt("Digite o primeiro número");
let number2 = prompt("Digite o segundo número");
let sum = number1 + number2; // soma de dois textos (strings)
confirm("O resultado é: " + sum);
// Resultado: string "1" + string "1" = string "11" concatenação por junção de strings 

// soma de dois valores (versão corrigida)
let number1 = prompt("Digite o primeiro número");
let number2 = prompt("Digite o segundo número");
let sum = Number(number1) + Number(number2); // soma de dois números (numbers) convertidos de texto
confirm("O resultado é: " + sum);
// Resultado: número 1 + número 1 = número 2
