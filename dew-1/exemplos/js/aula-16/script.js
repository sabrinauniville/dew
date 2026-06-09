// TIPOS DE VARIÁVEIS
// Var
{
  var name; // Declaração de variável sem atribuição de valor
  name = "Sabrina"; // Atribuição de valor
  console.log(name); // "Sabrina"

  name = "Sabrina B. M."; // Reatribuição de valor
  console.log(name); // "Sabrina B. M."

  var name = "Sabrina B. Moreira"; // Redeclaração de variável
  console.log(name); // "Sabrina B. Moreira"
}

// Let
{
  let age; // Declaração de variável sem atribuição de valor
  console.log(age); // undefined

  age = 32; // Atribuição de valor
  console.log(age); // 32

  age = 33; // Reatribuição de valor
  console.log(age); // 33

  //let age = 33; // Redeclaração de variável => Erro: Identifier 'age' has already been declared
}

// Let: exemplo de erro de redeclaração de variável com mesmo nome no mesmo bloco de código
{
  let age;
  age = 32;
  let age = 33;
  // Uncaught SyntaxError: Identifier 'age' has already been declared
}

// Let: redeclaração em blocos de código diferentes
{
  let age;
  age = 32;
  console.log(age);
}

{
  let age;
  age = 33;
  console.log(age);
}

//Const
{
  const city = "Joinville"; // Declaração de variável com atribuição de valor OBRIGATÓRIA
  console.log(city); // "Joinville"
}

// Const: exemplo de erro de falta de declaração de variável SEM atribuição de valor
{
  const city; // Declaração de variável sem atribuição de valor
  //Uncaught SyntaxError: Missing initializer in const declaration
}

// Const: exemplo de erro de reatribuição de valor para constante
{
  const city = "Joinville";
  city = "Florianópolis";
  console.log(city);
}

// NaN (Not a Number)
x = "a" - "b";
console.log(x); // NaN

x = 0 / 0;
console.log(x); // NaN

x = parseInt("oi");
console.log(x); // NaN

x = Number("oi");
console.log(x); // NaN

x = 1 + NaN;
console.log(x); // NaN

// NaN comparações
// Forma errada de comparar NaN
NaN == NaN; // false, NaN não é igual a NaN
NaN === NaN; // false, NaN não é estritamente igual a NaN

NaN !== NaN; // true, NaN é diferente de NaN
NaN != NaN; // true, NaN é diferente de NaN

// Forma correta de comparar NaN
Number.isNaN(NaN); // true, NaN é considerado NaN
Number.isNaN(1); // false, 1 não é considerado NaN
Number.isNaN("oi"); // false, "oi" não é considerado NaN
Number.isNaN(0 / 0); // true, 0/0 é considerado NaN

//Symbol
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 == id2); // false, Symbols são únicos
console.log(id1 === id2); // false, Symbols são únicos

const id3 = Symbol(1);
const id4 = Symbol(1);
console.log(id3 == id4); // false, Symbols são únicos
console.log(id3 === id4); // false, Symbols são únicos

// Tipagem dinâmica do JavaScript: aceita vários tipos de valores em uma mesma variável
let x = 1; // Número
x = 0.01; // Número inteiro ou real.
x = "hello world"; // Strings de texto entre aspas duplas.
x = "JavaScript"; // Aspas simples também delimitam strings.
x = true; // Um valor booleano.
x = false; // O outro valor booleano.
x = null; // Significa "não há valor aqui".
x = undefined; // Significa "nenhum valor foi definido ainda".

// OPERADORES ARITMÉTICOS
3 + 2; // adição, resultado é 5
3 - 2; // subtração, resultado é 1
3 * 2; // multiplicação, resultado é 6
3 / 2; // divisão, resultado é 1.5
3 % 2; // módulo, resultado é 1 (resto da divisão de 3 por 2)
3 ** 2; // exponenciação, resultado é 9 (3 elevado a 2)

// OPERADORES DE ATRIBUIÇÃO
let count = 1; // atribuição de valor
count += 2; // soma mais 2 em count, count agora é 3
count -= 1; // subtrai 1 do valor de count, agora é 2
count *= 2; // multiplica count por 2, agora é 4
count /= 2; // divide valor de count por 2, count agora é 2
count %= 3; // atribui o resto da divisão de count por 3, count agora é 2
count **= 3; // eleva count a potência de 3, count agora é 8

// OPERADORES DE COMPARAÇÃO
// Comparação simples
// converte a string para número e compara
5 == "5"; // true

//Comparação estrita
// não há conversão de tipos, compara os
// tipos e valores existentes.
5 === "5"; // false

// Diferença simples
5 != "5"; // false, ambos os valores são iguais (conversão de tipo para validar valor)

// Diferença estrita
5 !== "5"; // true, seus valores ou tipos são diferentes

// Comparação de maior e menor
5 > 1; // true, 5 é maior que 1
5 < 1; // false, 5 não é menor que 1
5 >= 5; // true, 5 é maior ou igual a 5
4 <= 5; // true, 4 é menor ou igual a 5

// Comparação de strings
"A" < "a"; // true, A (65) é menor que a (97)

"casa" > "carro"; // true, "casa" é maior que "carro"
// Comparação:
// c = c (99)
// a = a (97)
// s (115) > r (114)
// difença encontrada, comparação finalizada

"java" < "javascript"; // true, java é menor que javascript
// Comparação:
// j = j (106)
// a = a (97)
// v = v (118)
// a = a (97)
// A string java termina antes de javascript, portando é
// considerada menor.

// OPERADORES LÓGICOS
// E &&
true && true; // true, ambos os valores são verdadeiros
true && false && true; // false, um dos valores é falso

// OU ||
true || true; // true, um dos valores é verdadeiro
false || false; // false, um dos valores é falso
true || false || true; // true, um dos valores é verdadeiro

// NOT !
!true; // false, nega o valor verdadeiro
!false; // true, nega o valor falso

//Expressões
// E &&
5 > 1 && 4 < 5; // true, 5 é maior que 1 E 4 é menor que 5

5 >= 5 && 4 < 5; // true, 5 é maior ou igual a 5 E 4 é menor que 5

// OU ||
5 === "5" || Number.isNaN(0 / 0); // true
// 5 é igual estritamente a "5" (falso) OU 0/0 é NaN (verdadeiro)

// NOT !
!4 > 3;
// 4 NÃO É menor (maior) que 3? (falso, 4 é maior que 3)

// Combinações: OU || NOT !
5 === "5" || !Number.isNaN(0 / 0); // false
// 5 é igual estritamente a "5"? (falso, tem tipos diferentes)
// OU
// 0/0 NÃO É NaN? (falso, é NaN)
// falso + falso = falso

// OPERADORES DE INCREMENTO E DECREMENTO
let number = 1;
// Usa a variável atual (1) e depois incrementa em 1
console.log("number atualizado: " + number++); // 1

// Usa a variável atual (2) e depois decrementa em 1
console.log("number atualizado: " + number--); // 2

// incrementa em 1 a variavel atual (1) e a usa
console.log("number atualizado: " + ++number); // 2

// decrementa em 1 a variavel atual (2) e a usa
console.log("number atualizado: " + --number); // 1

//Comparativo
{
  let numberComparation = 1;
  console.log("valor atualizado: " + numberComparation); // 1

  // retorna o valor atual (1) e depois adiciona + 1 (2)
  console.log("valor atualizado: " + numberComparation++); // 1

  // adiciona + 1 ao valor atual (2) e o retorna (3)
  console.log("valor atualizado: " + ++numberComparation); // 3
}
