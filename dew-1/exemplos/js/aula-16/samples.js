// FORMAS DE DECLARAR VARIÁVEIS
// var: declaração e reatribuição de valor
{
  // Bloco de código 1
  var myName; // declaração da variável bloco 1
  myName = "Ana"; // atribuição de valor no bloco 1
  console.log("Meu nome é: " + myName); // acesso do valor da variável no bloco 1
}

// var: declaração de variáveis vazam entre os blocos de código
{
  {
    // Bloco de código 1
    var myName; // declaração da variável bloco 1
    var myName = "Ana"; // declaração da variável e atribuição de valor no bloco 1
  }
  // Bloco de código 2
  console.log("Meu nome é: " + myName); // acesso da variável no bloco 2 (a variável vazou entre os blocos)
}

// var: redeclaração de variáveis com mesmo nome no mesmo bloco é permitido
{
  {
    // Bloco de código 1
    var myName; // declaração da variável bloco 1
    console.log("Meu nome é: " + myName); // acesso de variável no bloco 1
    var myName = "Ana"; // redeclaração de variável com mesmo nome no bloco 1
    console.log("Meu nome é: " + myName); // acesso de variável no bloco 1
  }
  // Bloco de código 2
  console.log("Meu nome é: " + myName); // acesso de variável no bloco 2
  var myName = "Maria"; // redeclaração de variável com mesmo nome no bloco 2
  console.log("Meu nome é: " + myName); // acesso de variável no bloco 2
}

// _____________________________________________________________________________________________________________________

// let: declaração e reatribuição de valor
{
  // Bloco de código 1
  let myName; // declaração da variável bloco 1
  myName = "Ana"; // atribuição de valor no bloco 1
  console.log("Meu nome é: " + myName); // acesso do valor da variável no bloco 1
}

// let: declaração de variáveis NÃO vazam entre os blocos e acesso fora do bloco de declaração gera erro
{
  {
    // Bloco de código 1
    let myName = "Ana"; // declaração da variável bloco 1
  }
  // Bloco de código 2
  console.log("Meu nome é: " + myName); // tentativa de acesso da variável no bloco 2
  // Uncaught ReferenceError: myName is not defined
}

// let: redeclaração de variáveis com mesmo nome no mesmo bloco gera erro
{
  {
    // Bloco de código 1
    let myName; // declaração da variável bloco 1
    let myName = "Ana"; // redeclaração de variável com mesmo nome no bloco 1
    //Uncaught SyntaxError: Identifier 'myName' has already been declared
  }
  // Bloco de código 2
}

// let: redeclaração de variáveis com mesmo nome em blocos diferentes é permitido
{
  {
    // Bloco de código 1
    let myName; // declaração da variável bloco 1
    console.log("Meu nome é: " + myName);
  }
  // Bloco de código 2
  let myName = "Ana"; // redeclaração de variável com mesmo nome no bloco 2
  console.log("Meu nome é: " + myName);
}

// _____________________________________________________________________________________________________________________

// const: declaração e atribuição de valor
{
  {
    // Bloco de código 1
    const myName = "Ana"; // declaração e atribuição de valor OBRIGATÓRIA no bloco 1
    console.log("Meu nome é: " + myName); // acesso do valor da variável no bloco 1
  }
  console.log("Meu nome é: " + myName); // acesso do valor da variável no bloco 2
  // ReferenceError: myName is not defined
}

// const: declaração sem atribuição de valor gera erro
{
  // Bloco de código 1
  const myName; // declaração e sem atribuição de valor no bloco 1
}

// const: redeclaração de variáveis com mesmo nome em blocos diferentes (permitido)
{
  {
    // Bloco de código 1
    const myName = "Ana"; // declaração da variável bloco 1
    console.log("Meu nome é: " + myName);
  }
  // Bloco de código 2
  const myName = "Maria"; // redeclaração de variável com mesmo nome no bloco 2
  console.log("Meu nome é: " + myName);
}

// __________________________________________________________________________________

// TIPOS ESPECIAIS DE VARIÁVEIS
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
// NaN: forma errada de identificar se um valor é NaN
NaN == NaN; // false, NaN não é igual ao valro de NaN
NaN === NaN; // false, NaN não é igual em valor e tipo com NaN

NaN != NaN; // true, NaN tem valor diferente de NaN
NaN !== NaN; // true, NaN tem valor e tipo diferente de NaN

// NaN: forma correta de identificar se um valor é NaN
// isNaN(): existe mais raramente é indicado por realizar conversões automática de tipos
isNaN("oi"); // true, porque a conversão dessa string para número resulta em NaN
// a função identifica que o valor passo não é do tipo numérico
// E tenta converter essa valor para número
// Pois o NaN é do tipo numérico então só pode ser comparado com outro número
isNaN(Number("oi"));
// Como não é possível converter um palavra em número, retorna como resultado NaN.
// O uso da isNaN deve ser exclusivamente para valores numéricos ou que podem ser convertidos corretamente aos mesmos.

// Já o Number.isNaN() identifica que o valor comparado é uma string e não tenta fazer conversões
// E como uma string não é número, resulta em false, pois NaN é do tipo numérico.
Number.isNaN("oi"); // false, string não é do tipo numérico portanto não pode ser NaN

// O Number.isNaN(): função indicada para verificação de NaN, não realiza conversão de tipo automaticamente
Number.isNaN(NaN); // true, NaN é considerado NaN

// NaN: verificação de tipo
Number.isNaN(0 / 0); // true, essa operação gera um NaN
Number.isNaN(Number("a")); // true, uma a (string) convertido em number resulta em NaN

Number.isNaN(1); // false, é um número
Number.isNaN(true); // false, é um boolean
Number.isNaN("a" + "b"); // false, é uma string concatenada ab
Number.isNaN("a" + 3); // false, é uma string concatenada a3
Number.isNaN(3 + "1"); // false, é uma string concatenada 31
Number.isNaN(3 - "1"); // false, é um número 2

// Comparação do uso do isNaN() x Number.isNaN()
isNaN(NaN); // true, NaN é um NaN
Number.isNaN(NaN); // true, NaN é um NaN

isNaN(0 / 0); // true, a conversão da string "0/0" resulta em NaN
Number.isNaN(0 / 0); // true, a conversão da string "0/0" resulta em NaN

// uso indicado do isNaN() em vez do Number.isNaN()
// caso 1
// essa função tenta converter automaticamente a string NaN em número e obter um número de valor NaN
isNaN("NaN"); // true

// já essa função não faz conversão automática, e mesmo que o valor seja NaN, seu tipo é string, incompatível com NaN que é do tipo numérico
Number.isNaN("NaN"); // false

// aqui precisariamos fazer a conversão manual da string para número para a validação retornar verdade
Number.isNaN(Number("NaN")); //true

// caso 2
// a string "0/0" não representa um número válido e sua conversão resulta em NaN
isNaN("0/0"); // true

// a função verifica que o valor recebido é uma string e, como ele não é exatamente o valor especial NaN, retorna false
Number.isNaN("0/0"); // false

// aqui foi necessário realizar um passo a mais para conversar a operação aritmética de string para número
Number.isNaN(Number("0/0")); // true, a conversão da string "0/0" resulta em NaN

// _____________________________________________________________________________________________________________________

// Symbol() sempre cria um símbolo novo e único
// Comparação simples e estrita de Symbol: nunca vai dar igual
const id1 = Symbol(1); // definição de Symbol com descrição do valor numérico 1
const id2 = Symbol(1);
console.log(id1 == id2); // false, cada Symbol criado é único
console.log(id1 === id2); // false, cada Symbol criado é único

// O Symbol.for() procura um símbolo existente em um registro global e o reutiliza se encontrar
// Comparação simples e estrita de Symbol com .for()
const id3 = Symbol.for(1);
const id4 = Symbol.for(1);
console.log(id3 === id4); // true, Symbol.for() reutiliza o mesmo símbolo global

// __________________________________________________________________________________

// Tipagem dinâmica do JavaScript: aceita vários tipos de valores em uma mesma variável
let x = 1; // Número inteiro
x = 0.01; // Número decimal
x = "hello world"; // Strings de texto entre aspas duplas
x = true; // Um valor booleano
x = false; // O outro valor booleano
x = null; // Significa "não há valor aqui"
x = undefined; // Significa "nenhum valor foi definido ainda"

// __________________________________________________________________________________

// OPERADORES
// 1 OPERADORES ARITMÉTICOS
3 + 2; // adição, resultado é 5
3 - 2; // subtração, resultado é 1
3 * 2; // multiplicação, resultado é 6
3 / 2; // divisão, resultado é 1.5
3 % 2; // módulo, resultado é 1 (resto da divisão de 3 por 2)
3 ** 2; // exponenciação, resultado é 9 (3 elevado a 2)

// Operações com textos
// Operações aritméticas (exceto soma) com valores numéricos no tipo string serão
// convertidas automaticamente para poder realizar as operações aritméticas.
"3" - 2; // 1
3 - "2"; // 1
"3" - "2"; // 1
3 - "um"; // NaN
3 * "1"; // 3
"3" / "1"; // 3

// _____________________________________________________________________________________________________________________

// 2 OPERADORES DE ATRIBUIÇÃO
let count = 1; // atribuição de valor
count += 2; // soma mais 2 em count, count agora é 3
count -= 1; // subtrai 1 do valor de count, agora é 2
count *= 2; // multiplica count por 2, agora é 4
count /= 2; // divide valor de count por 2, count agora é 2
count %= 3; // atribui o resto da divisão de count por 3, count agora é 2
count **= 3; // eleva count a potência de 3, count agora é 8

// _____________________________________________________________________________________________________________________

// 3 OPERADORES DE COMPARAÇÃO
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
// strings: igualdade e diferença
// Na comparação de strings puras, ou seja, onde todos os valores comparados são do tipo string
// Como não há tipos diferentes, o == não precisa converter nada e acaba funcionando igual ao ===.
console.log("a" == "a"); // true, são iguais
console.log("a" === "a"); // true, são iguais
// Ou seja, não tem diferença entre o uso da comparação flexível (==) x a comparação estrita (===)

// strings: maior, menor e igual
"A" < "a"; // true, A (65) é menor que a (97)

"casa" > "carro"; // true, "casa" é maior que "carro"
// Comparação:
// c = c (99)
// a = a (97)
// s (115) > r (114)
// diferença encontrada, comparação finalizada

"java" < "javascript"; // true, java é menor que javascript
// Comparação:
// j = j (106)
// a = a (97)
// v = v (118)
// a = a (97)
// A string java termina antes de javascript, portanto é considerada menor.

// _____________________________________________________________________________________________________________________

// 4 OPERADORES LÓGICOS
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

// Expressões
// E &&
5 > 1 && 4 < 5; // true, 5 é maior que 1 E 4 é menor que 5

5 >= 5 && 4 < 5; // true, 5 é maior ou igual a 5 E 4 é menor que 5

// OU ||
5 === "5" || Number.isNaN(0 / 0); // true
// 5 é igual estritamente a "5" (falso) OU 0/0 é NaN (verdadeiro)

// NOT !
!(4 > 3); // 4 é maior que 3?, sim (true), e negação dessa resposta é false

// Combinações: OU || NOT !
5 === "5" || !Number.isNaN(0 / 0); // false
// 5 é igual estritamente a "5"? (falso, tem tipos diferentes)
// OU
// 0/0 NÃO É NaN? (falso, é NaN)
// falso + falso = falso

// _____________________________________________________________________________________________________________________

// 5 OPERADORES DE INCREMENTO E DECREMENTO
let number = 1;
// Pós-incremento: usa a variável atual (1) e depois incrementa em 1
console.log("number atualizado: " + number++); // 1

// Pós-decremento: usa a variável atual (2) e depois decrementa em 1
console.log("number atualizado: " + number--); // 2

// Pré-incremento: incrementa em 1 a variavel atual (1) e a usa
console.log("number atualizado: " + ++number); // 2

// Pré-decremento: decrementa em 1 a variavel atual (2) e a usa
console.log("number atualizado: " + --number); // 1

//Comparativo pós-incremento x pré-incremento
{
  let numberComparation = 1;
  console.log("valor atualizado: " + numberComparation); // 1

  // retorna o valor atual (1) e depois adiciona + 1 (2)
  console.log("valor atualizado: " + numberComparation++); // 1

  // adiciona + 1 ao valor atual (2) e o retorna (3)
  console.log("valor atualizado: " + ++numberComparation); // 3
}
