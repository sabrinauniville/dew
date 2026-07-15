// LAÇOS DE REPETIÇÃO (LOOPS)
// Permitem repetir um bloco de código várias vezes

// FOR: usado quando sabemos quantas vezes o bloco será executado
// Estrutura: início → condição → incremento

// For variação 1
for (
  let k = 1; // Variável de controle
  k <= 5; // Condição de continuação
  k++ // Atualização da variável de controle, equivalente a k = k + 1;
) {
  console.log("k: " + k); // k: 1, k: 2, k: 3, k: 4, k: 5
}

// For variação 2
for (let k = 1; k <= 5; k = k + 1) {
  console.log("k: " + k); // k: 1, k: 2, k: 3, k: 4, k: 5
}

// For com decremento da variável de controle
for (let k = 5; k >= 1; k--) {
  console.log("k: " + k); // k: 5, k: 4, k: 3, k: 2, k: 1
}

//_____________________________________________________________________________________________________________________;

// WHILE: executa enquanto a condição for verdadeira
// ideal quando não sabemos quantas repetições serão necessárias

let i = 1; // Variável de controle
while (i <= 5) {
  // Condição de continuação
  console.log("i: " + i);
  i++; // Atualização da variável de controle, equivalente a i = i + 1;
}

// _____________________________________________________________________________________________________________________

// DO WHILE: executa pelo menos uma vez antes de testar a condição

let j = 1;

do {
  console.log("j: " + j);
  j++; // Atualização da variável de controle, equivalente a j = j + 1;
} while (j <= 5);

/*
Loop infinito

Ocorre quando a condição de parada nunca é atingida,
geralmente porque a variável de controle não é atualizada corretamente.

// Exemplo
while (i <= 5) {
  console.log("i: " + i);
  i++; // sem isso ocorre loop infinito
}

// Erro:
// A variável i nunca é incrementada.
// Como a condição i <= 5 sempre será verdadeira,
// o loop nunca será encerrado.

// Para evitar:
// Verifique se a variável de controle é atualizada
// corretamente em algum momento da repetição.
*/

// _____________________________________________________________________________________________________________________

// break: encerra completamente o loop

for (let k = 1; k <= 5; k++) {
  if (k === 3) {
    break;
  }

  console.log("k: " + k); // k: 1, k: 2, k: 3
}

// _____________________________________________________________________________________________________________________

// continue: pula a iteração atual e vai para a próxima

for (let k = 1; k <= 5; k++) {
  if (k === 3) {
    continue;
  }

  console.log("k: " + k); // k: 1, k: 2, k: 4, k: 5, o k: 3 foi ignorada
}

// _____________________________________________________________________________________________________________________

// Laços de repetição aninhados
// Um laço de repetição declarado dentro de outro laço de repetição

for (let a = 1; a <= 2; a++) {
  // Laço externo

  for (let b = 1; b <= 3; b++) {
    // Laço interno

    console.log("b: " + b);
  }

  console.log("a: " + a);
}
/*
// b: 1, b: 2, b: 3, a: 1, b: 1, b: 2, b: 3, a: 2
O laço interno é executado completamente antes que o laço externo avance para a próxima repetição.
*/

// _____________________________________________________________________________________________________________________

// ARRAYS
// arrays são estruturas indexadas (0,1,2...)
// permitem armazenar múltiplos valores em sequência

// Array de strings
const technologies = ["HTML", "CSS", "JavaScript"];
console.log(technologies);

// length: retorna a quantidade total de elementos dentro de um array
console.log(technologies.length); // 3

// Acesso de valores do array através do índice (index)
console.log(technologies[0]); // HTML
console.log(technologies[1]); // CSS
console.log(technologies[2]); // JavaScript

// Array de números
const numbersArray = [1, 2, 3, 4];

// Acesso de valores do array através do índice (index)
console.log([1, 2, 3, 4][0]); // 1
console.log([1, 2, 3, 4][3]); // 4

// Métodos auxiliares para arrays
console.log([1, 2, 3, 4].length); // 4

// push(): adiciona um elemento no final do array e retorna o novo tamanho do array
console.log([1, 2, 3, 4].push(5)); // 5

// pop(): remove o último elemento do array e o retorna
console.log([1, 2, 3, 4].pop()); // 4

// shift(): remove o primeiro elemento do array e o retorna
console.log([1, 2, 3, 4].shift()); // 1

// unshift(): adiciona um ou mais elementos no início do array e retorna o novo tamanho
console.log([1, 2, 3, 4].unshift(0)); // 5

// includes: verifica se existe o valor (true/false)
console.log([1, 2, 3, 4].includes(2)); // true

// indexOf: retorna posição do item no array
console.log([1, 2, 3, 4].indexOf(3)); // 2

// find(): retorna o primeiro elemento que satisfaz a condição informada
console.log([1, 2, 3, 4].find((x) => x > 3)); // 4

// filter: retorna apenas itens que passam na condição
console.log([1, 2, 3, 4].filter((x) => x > 3)); // [4]

// map: transforma cada item do array
console.log([1, 2, 3, 4].map((x) => x * 2)); // [2, 4, 6, 8]

// forEach(): executa uma função para cada elemento do array sem retornar novo array
[1, 2, 3, 4].forEach((x) => console.log(x));

// some: retorna true se pelo menos 1 item atender condição
console.log([1, 2, 3, 4].some((x) => x > 2)); // true

// every: retorna true se TODOS os itens atenderem a condição
console.log([1, 2, 3, 4].every((x) => x > 0)); // true

// join(): transforma todos os elementos do array em uma string separada por um delimitador
console.log([1, 2, 3, 4].join(", ")); // "1, 2, 3, 4"

// slice(): retorna uma cópia parcial do array sem alterar o original
console.log([1, 2, 3, 4].slice(1)); // [2, 3, 4]

// splice remove elementos e altera o array original
console.log([1, 2, 3, 4].splice(1, 1)); // [2]

// _____________________________________________________________________________________________________________________

// String x Array
let languageNameString = "JavaScript";
console.log(languageNameString[0]); // J
console.log(languageNameString.length); // 10

// Strings são imutáveis
languageNameString[0] = "T";
console.log(languageNameString); // JavaScript

const technologiesArray = ["HTML", "CSS", "JavaScript"];
console.log(technologiesArray[0]); // HTML
console.log(technologiesArray.length); // 3

// Arrays são mutáveis
technologiesArray[0] = "TypeScript";
console.log(technologiesArray); // ["TypeScript", "CSS", "JavaScript"]

// _____________________________________________________________________________________________________________________

// objetos representam entidades do mundo real
// são formados por chave (propriedade) e valo

const labrador = {
  name: "Rex",
  age: 3,
  breed: "Labrador",
};

console.log(labrador.name); // Rex
console.log(labrador.age); // 3

const caramelo = {
  name: "Caramelo",
  age: 1,
  breed: "Desconhecido",
};

console.log(caramelo.name); // Caramelo
console.log(caramelo["breed"]); // Desconhecido

// Manipulação de objetos
const person = {
  name: "Sabrina",
  age: 40,
  technologies: ["HTML", "CSS", "JavaScript"],

  talk(text) {
    console.log(text);
  },
};

// Formas de exibir valores de objetos
console.log(person);
console.log(person.name);
console.log(person["age"]);

// Alteração de valor de propriedade de objeto
person.age = 50;

// Inclusão de nova propriedade a objeto
person.course = "JavaScript";

// Obtenção de valor de uma listagem dentro de um objeto
person.technologies[0];

// Adição de valor em uma listagem dentro de um objeto
person.technologies.push("Angular");

Object.keys(person); // ['name', 'age', 'technologies', 'talk']
Object.values(person); // (4) ['Sabrina', 40, Array(3), ƒ]
Object.entries(person);
/*
(4) [Array(2), Array(2), Array(2), Array(2)]
0: (2) ['name', 'Sabrina']
1: (2) ['age', 40]
2: (2) ['technologies', Array(3)]
3: (2) ['talk', ƒ]
*/

const personFreezing = { ...person };
const personSealed = { ...person };

// freeze: bloqueia totalmente o objeto (não altera nada)
Object.freeze(personFreezing);
personFreezing.nationality = "Brasileira";
personFreezing.name = "Sabrina B";
console.log(personFreezing);

// seal: permite alterar valores, mas não adicionar/remover propriedades
Object.seal(personSealed);
personSealed.nationality = "Brasileira";
personSealed.name = "Sabrina B";
console.log(personSealed);

// Verifica se um objeto tem uma propriedade deste nome
person.hasOwnProperty("name"); // true

person.talk("oi");

// Função x Método
function talk(text) {
  console.log(text);
}
talk("oi");

person.talk("oi");

// _____________________________________________________________________________________________________________________

// Verificação de tipo de arrays
const numbers = [10, 20, 30];

// Forma incorreta para diferenciar array de objeto
console.log(typeof numbers); // "object"

// Forma correta
console.log(Array.isArray(numbers)); // true

// Comparando array x objeto
console.log(typeof numbers); // "object"
console.log(typeof person); // "object"

console.log(Array.isArray(numbers)); // true
console.log(Array.isArray(person)); // false

// _____________________________________________________________________________________________________________________

// ARRAY DE OBJETOS

const students = [
  {
    name: "Ana",
    age: 20,
  },
  {
    name: "Carlos",
    age: 22,
  },
  {
    name: "João",
    age: 19,
  },
];

console.log(students);

console.log(students[0].name); // Ana
console.log(students[1].age); // 22

for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}

// _____________________________________________________________________________________________________________________

// DATE
// Utilizado para trabalhar com datas e horários

// Geração de objetos data
const currentDate = new Date(); // Data e hora atual
console.log("currentDate:", currentDate);

const someDate = new Date("2026-06-23"); // Data base
console.log("someDate:", someDate); // someDate: Mon Jun 22 2026 21:00:00 GMT-0300 (Horário Padrão de Brasília)

// Métodos de apoio para datas
console.log(someDate.getFullYear()); // 2026
console.log(someDate.getMonth()); // 5 (começa a contar em 0)
console.log(someDate.getDate()); // 22
console.log(someDate.getHours()); // 21
console.log(someDate.getMinutes()); // 0
console.log(someDate.toLocaleDateString("pt-BR")); // 22/06/2026
console.log(someDate.toLocaleTimeString("pt-BR")); // 21:00:00

// Operações com datas
// Date trabalha com timestamps (milissegundos desde 1970)
// todas as operações são matemáticas em cima desse valor

// Dica: Sempre que for fazer operações com datas, clone o objeto Date antes de alterar, para não modificar o original.

// adicionar 7 dias
const add7Days = new Date(someDate);
add7Days.setDate(add7Days.getDate() + 7);
console.log("+7 dias:", add7Days.toLocaleDateString("pt-BR")); // +7 dias: 29/06/2026

// diminuir 1 mes
const minus1Month = new Date(someDate);
minus1Month.setMonth(minus1Month.getMonth() - 1);
console.log("-1 mês:", minus1Month.toLocaleDateString("pt-BR")); // -1 mês: 22/05/2026

// adicionar 3 horas
const add3Hours = new Date(someDate);
add3Hours.setHours(add3Hours.getHours() + 3);
console.log("+3 horas:", add3Hours.toLocaleTimeString("pt-BR")); // +3 horas: 00:00:00

// adicionar 30 minutos
const add30Min = new Date(someDate);
add30Min.setMinutes(add30Min.getMinutes() + 30);
console.log("+30 minutos:", add30Min.toLocaleTimeString("pt-BR")); // +30 minutos: 21:30:00

// adicionar 30 minutos
const add50Sec = new Date(someDate);
add50Sec.setSeconds(add50Sec.getSeconds() + 50);
console.log("+50 segundos:", add50Sec.toLocaleTimeString("pt-BR")); // +50 segundos: 21:00:50

// _____________________________________________________________________________________________________________________
