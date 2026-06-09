// Uma variável é um nome simbólico para um valor.
// As variáveis são declaradas com a palavra-chave let:
let x; // Declara uma variável chamada x.

// Valores podem ser atribuídos às variáveis com o sinal =
x = 0; // Agora a variável x tem o valor 0

// JavaScript aceita vários tipos de valores
x = 1; // Números.
x = 0.01; // Números podem ser inteiros ou reais.
x = "hello world"; // Strings de texto entre aspas.
x = "JavaScript"; // Aspas simples também delimitam strings.
x = true; // Um valor booleano.
x = false; // O outro valor booleano.
x = null; // Null é um valor especial que significa "nenhum valor".
x = undefined; // Undefined é outro valor especial, como null.

// O tipo de dados mais importante de JavaScript é o objeto.
// Um objeto é uma coleção de pares nome/valor ou uma string para mapa de valores.
let book = {
  // Objetos são colocados entre chaves.
  topic: "JavaScript", // A propriedade "topic" tem o valor "JavaScript".
  edition: 7, // A propriedade "edition" tem o valor 7.
}; // A chave marca o fim do objeto.

// Acesse as propriedades de um objeto com . ou []:
book.topic; // => "JavaScript"
book["edition"]; // => 7: outro modo de acessar valores de propriedade.

book.author = "Flanagan"; // Crie novas propriedades por meio de atribuição.
book.contents = {}; // {} é um objeto vazio sem qualquer propriedade.

// Acessar condicionalmente propriedades com ?. (ES2020):
book.contents?.ch01?.sect1; // => undefined: book.contents não tem a propriedade ch01.

// JavaScript também aceita arrays (listas indexadas numericamente) de valores.
let primes = [2, 3, 5, 7]; // Um array de 4 valores, delimitados com [ e ].
primes[0]; // => 2: o primeiro elemento (índice 0) do array.
primes.length; // => 4: quantidade de elementos no array.
primes[primes.length - 1]; // => 7: o último elemento do array.
primes[4] = 9; // Adiciona um novo elemento por meio de atribuição.
primes[4] = 11; // Ou altera um elemento existente por meio de atribuição.
let empty = []; // [] é um array vazio, sem qualquer elemento.
empty.length; // => 0

// Os arrays e objetos podem conter outros arrays e objetos:
let points = [
  // Um array com 2 elementos.
  { x: 0, y: 0 }, // Cada elemento é um objeto.
  { x: 1, y: 1 },
];
let data = {
  // Um objeto com 2 propriedades
  trial1: [
    [1, 2],
    [3, 4],
  ], // O valor de cada propriedade é um array.
  trial2: [
    [2, 3],
    [4, 5],
  ], // Os elementos dos arrays são arrays.
};

// Os operadores atuam sobre os valores (operandos) para produzir um novo valor.
// Os operadores aritméticos são alguns dos mais simples:
3 + 2; // => 5: adição
3 - 2; // => 1: subtração
3 * 2; // => 6: multiplicação
3 / 2; // => 1.5: divisão
points[1].x - points[0].x; // => 1: operandos mais complicados também funcionam
"3" + "2"; // => "32": + soma números, ou concatena strings

// JavaScript define alguns operadores aritméticos de forma abreviada
let count = 0; // Define uma variável
count++; // Incrementa a variável
count--; // Decrementa a variável
count += 2; // Soma 2: o mesmo que count = count + 2;
count *= 3; // Multiplica por 3: o mesmo que count = count * 3;
count; // => 6: nomes de variáveis também são expressões.

// Os operadores de igualdade e relacionais testam se dois valores são iguais,
// desiguais, menores que, maiores que etc. São avaliados como verdadeiros ou falsos.
let z = 2;
y = 3; // Esses sinais = são atribuições e não testes de igualdade.
z === y; // => falso: igualdade
z !== y; // => verdadeiro: desigualdade
z < y; // => verdadeiro: menor que
z <= y; // => verdadeiro: menor ou igual a
z > y; // => falso: maior que
z >= y; // => falso: maior ou igual a
"two" === "three"; // => falso: as duas strings são diferentes
"two" > "three"; // => verdadeiro: "tw" é alfabeticamente maior do que "th"
(false ===
  (z > y)(
    // => verdadeiro: falso é igual a falso
    // Os operadores lógicos combinam ou invertem valores booleanos
    z === 2,
  ) &&
  (y === 3)(
    // => verdadeiro: as duas comparações são verdadeiras. && é E
    z > 3,
  )) ||
  y < 3; // => falso: nenhuma das comparações é verdadeira. || é OU
!(z === y); // => verdadeiro: ! inverte um valor booleano

// Operadores de igualdade e relacionais
let c = 2,
  y = 3; // Esses sinais = são atribuições e não testes de igualdade.
c === y; // => falso: igualdade
c !== y; // => verdadeiro: desigualdade
c < y; // => verdadeiro: menor que
c <= y; // => verdadeiro: menor ou igual a
c > y; // => falso: maior que
c >= y; // => falso: maior ou igual a
"two" === "three"; // => falso: as duas strings são diferentes
"two" > "three"; // => verdadeiro: "tw" é alfabeticamente maior do que "th"
(false ===
  (c > y)(
    // => verdadeiro: falso é igual a falso

    // Operadores lógicos
    x === 2,
  ) &&
  (y === 3)(
    // => verdadeiro: as duas comparações são verdadeiras. && é E
    x > 3,
  )) ||
  y < 3; // => falso: nenhuma das comparações é verdadeira. || é OU
!(x === y); // => verdadeiro: ! inverte um valor booleano

// Igualdade frouxa
// Compara apenas os valores.
5 == "5"; // true

// Igualdade estrita
// Compara valor e tipo.
5 === "5"; // false

// Diferente
10 != "10"; // false

// Diferente estrito
10 !== "10"; // true
