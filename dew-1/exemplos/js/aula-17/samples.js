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

// _____________________________________________________________________________________________________________________

// Número => string
String(10); // "10"
String(10.99); // "10.99"

// _____________________________________________________________________________________________________________________

// Número => booleano
Boolean(1); // true
Boolean(0); // false
Boolean(-1); // true

// _____________________________________________________________________________________________________________________

// Booleano => número
Number(true); // 1
Number(false); // 0

// _____________________________________________________________________________________________________________________

// Valores Truthy e Falsy
// Valores avaliados implicitamente como verdadeiro ou falso

Boolean(""); // false
Boolean("JavaScript"); // true

Boolean(null); // false
Boolean(undefined); // false

Boolean([]); // true
Boolean({}); // true

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

// Conversões implícitas
// O JavaScript converte automaticamente valores para realizar operações
true + 1; // 2
Number(true) + 1; // opção mais segura para operações aritméticas

false + 1; // 1

null + 1; // 1
undefined + 1; // NaN

// _____________________________________________________________________________________________________________________

// Null e Undefined
// Representam ausência de valor, mas possuem significados diferentes

// Undefined
// A variável foi declarada, mas ainda não recebeu valor
let name;
console.log(name); // undefined

// Null
// A ausência de valor foi definida intencionalmente pelo programador
let city = null;
console.log(city); // null

// _____________________________________________________________________________________________________________________

// Comparações curiosas
0 == false; // true
"" == false; // true

null == undefined; // true
null === undefined; // false

// Recomenda-se utilizar sempre comparação estrita
// Para evitar a conversão automática de tipos para comparação
5 === "5"; // false: valor igual mais tipo diferente, é igual = falso
5 !== "5"; // true: valor igual mais tipo diferente, não é igual = verdadeiro

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

// indexOf()
// Retorna a posição da primeira ocorrência encontrada
console.log(languageName.indexOf("a")); // 1
console.log(languageName.indexOf("w")); // -1, caractere não encontrado

// Template Strings
// Utilizam crases e ${} para inserir variáveis ou expressões
console.log("Estamos aprendendo " + languageName + "!"); // Forma tradicional de concatenar strings
console.log(`Estamos aprendendo ${languageName}!`); // Template strings utiliza crases e ${} para inserir variáveis ou expressões
// quando temos expressões longas de concatenação de textos e variáveis, se torna mais fácil utilizar o Template Strings
