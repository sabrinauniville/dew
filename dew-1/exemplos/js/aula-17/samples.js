//Aula 17.1: Conversão de tipos, estruturas condicionais, operador ternário e Switch

// CONVERSÃO DE TIPOS

// String => número

// Number()
// Tenta converter toda a string para um número válido
Number("10.99"); // 10.99
Number("10.99 anos"); // NaN

// parseInt()
// Extrai apenas a parte inteira do início da string
parseInt("10.99"); // 10
parseInt("10.99 anos"); // 10
parseInt("há 10.99 anos"); // NaN

// parseFloat()
// Extrai um número decimal do início da string
parseFloat("10.99"); // 10.99
parseFloat("10.99 anos"); // 10.99
parseFloat("anos 10.99"); // NaN

// Verificação de tipo
typeof 10; // "number"
typeof 10.99; // "number"
typeof "10"; // "string"
typeof NaN; // "number"
typeof null; // object
typeof undefined; // undefined

// Outro exemplo de verificação de tipo
let dynamicTyping = 10;
console.log(typeof dynamicTyping); // "number"

dynamicTyping = "dez";
console.log(typeof dynamicTyping); // "string"

dynamicTyping = true;
console.log(typeof dynamicTyping); // "boolean"

// Verificação de tipo e conversão
let firstValue = "5";
let secondValue = 1;
firstValue + secondValue;
firstValue - secondValue;

typeof firstValue;
typeof secondValue;

Number(firstValue) + secondValue;
firstValue - secondValue;

// Erro de validação de tipo com null
// É indicado usar comparação estrita e não typeof para validar valores null.
typeof null; // 'object'

// Usar comparação estrita
null === null; // true

// e não fazer isso
typeof null === "object"; // true

// Essa falha do js não acontece com o tipo undefined
typeof undefined; // undefined
undefined === undefined; // true

let nullValue = null;
typeof nullValue;

// Não use essa verificação, pois pode causar problemas em verificação de tipo objetos
typeof null === "object";

// Prefira
nullValue === null;

// _____________________________________________________________________________________________________________________

// Número => string
// String
String(10); // "10"
String(10.99); // "10.99"
String(true); // 'true'
String(null); // 'null'
String(undefined); // 'undefined'
String({ name: "oi", id: 1 }); // '[object Object]'

// toString
(10).toString(); // '10'
(10.99).toString(); // '10.99'
true.toString(); // 'true'
/*
(null).toString(); // Uncaught TypeError: Cannot read properties of null (reading 'toString')
(undefined).toString(); // Uncaught TypeError: Cannot read properties of undefined (reading 'toString')
*/
({ name: "oi", id: 1 }).toString(); // '[object Object]'

// _____________________________________________________________________________________________________________________

// Operações entre strings e números

// Soma
// O número é convertido para string e ocorre concatenação
"5" + 1; // "51"

//Operações aritméticas devem ser feitos com tipos numéricos para evitar concatenação indesejada
5 + Number("1");

//Exemplos de conversão de tipo automática do JavaScript
"5" - 1; // a string 5 é convertido automaticamente em numero e realizado a operação aritmética, resultando em 4
5 + "1"; // o número 5 é convertindo automaticamente em texto e ocorre a concatenação, resultando em "51"

// Forma correta de utilizar: converter tipos manualmente
Number("5") - 1; // a string 5 é convertida manualmente em número e ocorre a operação aritmética, resultando em 4

// Outras operações: o JavaScript tenta converter a string para número
// Subtração
"5" - 1; // 4

// Multiplicação
"5" * 1; // 5

// Divisão
"5" / 1; // 5

// _____________________________________________________________________________________________________________________

// BOOLEAN
// Exemplo comum de uso de booleanos
let tentativas = 0;
const senhaCorreta = "123";
let senhaInformada = "";

while (tentativas < 3) {
  // Controle de fluxo
  senhaInformada = prompt("Digite a senha:");

  const senhaValida = senhaInformada === senhaCorreta; // Validação

  if (senhaValida) {
    // Estrutura de decisão
    console.log("Acesso permitido.");
    alert("Acesso permitido.");
    break;
  } else {
    console.log("Senha incorreta.");
  }

  tentativas++;
}

// Número => booleano
// Qualquer número diferente de 0 retornará true
Boolean(1); // true
Boolean(100); // true
Boolean(-1); // true
Boolean(0); // false

// Qualquer string que tenha algum caracter (inclusive espaços) retornará true
Boolean("JavaScript"); // true
Boolean("Olá"); // true
Boolean("1"); // true
Boolean("A"); // true
Boolean(" "); // true
Boolean(""); // false

// Null e undefined retornam falso
Boolean(null); // false
Boolean(undefined); // false

// Objetos e arrays: mesmo vazios são considerados true
Boolean({}); // true
Boolean([]); // true

// Booleano => número
Number(true); // 1
Number(false); // 0

// Booleano => texto
true.toString(); // "true"
false.toString(); // "false"

// Conversão implicita de boleanos
true + 1; // 2
false + 1; // 1
true * 10; // 10
false / 10; // 0

// Conversões implícitas
// O JavaScript converte automaticamente valores para realizar operações
true + 1; // 2
Number(true) + 1; // conversão explícita e mais previsível

false + 1; // 1

null + 1; // 1
undefined + 1; // NaN

// _____________________________________________________________________________________________________________________

// MÉTODOS PARA NÚMEROS
(10.567).toFixed(2); // 10.57, define quantas casas decimais o número deve ter
(10).toString(); // "10", converte número em string
NaN.toString(); // "NaN", converte número em string
Number.isNaN(NaN); // true, verifica se um número é um NaN
Number.isInteger(10); // true, verifica se um número é inteiro
Number.isInteger(10.9); // false, verifica se um número é inteiro
parseInt("10.9"); // 10, converte um valor para inteiro
parseInt(10.9); // 10, converte um valor para inteiro
parseFloat("10.9"); // 10.9 converte um valor para decimal
parseFloat(Infinity); // Infinity, converte um valor para decimal

// _____________________________________________________________________________________________________________________

// MÉTODOS PARA STRINGS
let languageName = "JavaScript";

// length
// Retorna a quantidade de caracteres da string
console.log(languageName.length); // 10

// toUpperCase()
// Converte todos os caracteres para maiúsculo
console.log(languageName.toUpperCase()); // JAVASCRIPT

// toLowerCase()
// Converte todos os caracteres para minúsculo.
console.log(languageName.toLowerCase()); // javascript

// trim()
// Remove os espaços em branco em volta da string
console.log(" JavaScript  ".trim()); // JavaScript

// includes()
// Verifica se a string contém um trecho informado
console.log(languageName.includes("Script")); // true

// startsWith()
// Verifica se a string inicia com o texto informado
console.log(languageName.startsWith("Java")); // true
// É necessário passar o caracter de mesma caixa que existe na string
// Pois seus valores Unicode são diferentes
console.log(languageName.startsWith("j")); // false, existe somente J em maiúsculo
// Para evitar isso, transformamos todo o valor da variável em minusculo e buscamos pelo caracter minúsculo nele
console.log(languageName.toLowerCase().startsWith("j")); // true, agora o J passou a ser mínusculo (pela função toLowerCase()) // e bateu com o caracter informado no startsWith

// endsWith()
// Verifica se a string termina com o texto informado
console.log(languageName.endsWith("Script")); // true

// replace()
// Substitui a primeira ocorrência de uma string por outra
console.log(languageName.replace("Java", "Type")); //TypeScript
"banana".replace("a", "A"); // bAnana

// replaceAll()
// Substitui todas as ocorrência encontradas de uma string por outra
console.log(languageName.replaceAll("a", "A")); //JAvAScript

// split()
// Divide uma string em um array pelo separador indicado
console.log("JavaScript, HTML, CSS".split(",")); //(3) ["JavaScript", " HTML", " CSS"] os espaços após a vírgula permanecem nos itens gerados

// substring()
// Extrai parte de uma string utilizando posição inicial e final
languageName.substring(0, 4); // "Java"

// slice()
// Extrai parte de uma string e aceita índices negativos
languageName.slice(-6); //'Script'

// charAt()
// Retorna o caractere de uma posição específica da string
languageName.charAt(4); // S, índices começam em 0

// indexOf()
// Retorna a posição da primeira ocorrência encontrada
console.log(languageName.indexOf("a")); // 1
console.log(languageName.indexOf("w")); // -1, caractere não encontrado

// MÉTODOS PARA BOOLEANOS
true.toString(); // true
true.valueOf(); // true

// Template Strings
// Utilizam crases e ${} para inserir variáveis ou expressões
console.log("Estamos aprendendo " + languageName + "!"); // Forma tradicional de concatenar strings
console.log(`Estamos aprendendo ${languageName}!`); // Template strings utiliza crases e ${} para inserir variáveis ou expressões
// quando temos expressões longas de concatenação de textos e variáveis, se torna mais fácil utilizar o Template Strings

_____________________________________________________________________________________________________________________;

// Função
// Bloco de código reutilizável para evitar repetição de código
function saudar() {
  console.log("Olá!");
}

console.log(saudar()); // Exibe "Olá!" e depois undefined, pois a função não retorna nenhum valor

// Função com recebimento de parâmetros e retorno
function sum(number1, number2) {
  // os parametros number1 e number2 são recebidos pela função sum
  return Number(number1) + Number(number2);
  // O return permite que uma função devolva um valor para quem a chamou
}

console.log(sum(1, 1)); // 1 e 1 são passados como parâmetro e o resultado é 2
console.log(sum(2, 3)); // 2 e 3 são passados como parâmetro e o resultado é 5
_____________________________________________________________________________________________________________________;

// ESTRUTURAS CONDICIONAIS
let mediaDeNotas = 7;
const mediaParaAprovacao = 6;
const mediaParaMerito = 9;

// If
// Executa um bloco de código quando a condição é verdadeira
if (mediaDeNotas >= mediaParaAprovacao) {
  console.log("Aprovado");
}

// _____________________________________________________________________________________________________________________

// If / Else
// Executa um bloco se a condição for verdadeira e outro se for falsa
if (mediaDeNotas >= mediaParaAprovacao) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// _____________________________________________________________________________________________________________________

// Else If
// Permite testar múltiplas condições em sequência
if (mediaDeNotas >= mediaParaMerito) {
  console.log("Aprovação com mérito");
} else if (mediaDeNotas >= mediaParaAprovacao) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// _____________________________________________________________________________________________________________________

// Operador Ternário
// Forma reduzida de escrever uma condição simples
mediaDeNotas >= mediaParaAprovacao
  ? console.log("Aprovado")
  : console.log("Reprovado");

// _____________________________________________________________________________________________________________________

// Switch
// Executa blocos de código com base em diferentes valores possíveis

let situacao = "Aprovado";
switch (situacao) {
  case "Aprovação com mérito":
    console.log("Parabéns pelo excelente desempenho!");
    break;

  case "Aprovado":
    console.log("Aluno aprovado.");
    break;

  case "Reprovado":
    console.log("Aluno reprovado.");
    break;

  default:
    console.log("Situação inválida.");
}

// _____________________________________________________________________________________________________________________

// Operador OR (||)
// Utiliza um valor padrão quando o valor à esquerda é considerado falso
let userName = "";
console.log(userName || "Visitante"); // "Visitante"

userName = "Sabrina";
console.log(userName || "Visitante"); // "Sabrina"

// _____________________________________________________________________________________________________________________

// Operador Nullish Coalescing (??)
// Utiliza um valor padrão apenas quando o valor é null ou undefined
console.log(userName ?? "Visitante"); // Sabrina

userName = null;
console.log(userName ?? "Visitante"); // "Visitante"
