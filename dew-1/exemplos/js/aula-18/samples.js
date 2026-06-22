// LAÇOS DE REPETIÇÃO (LOOPS)
// Permitem repetir um bloco de código várias vezes

// For
// Utilizado quando a quantidade de repetições é conhecida

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

// _____________________________________________________________________________________________________________________;

// While
// Repete um bloco de código enquanto uma condição for verdadeira
// Usado quando não sabemos quantas repetições serão necessárias

let i = 1; // Variável de controle
while (i <= 5) {
  // Condição de continuação
  console.log("i: " + i);
  i++; // Atualização da variável de controle, equivalente a i = i + 1;
}

// _____________________________________________________________________________________________________________________

// Do While
// Executa o bloco ao menos uma vez e continua repetindo enquanto a condição for verdadeira

let j = 1;

do {
  console.log("j: " + j);
  j++; // Atualização da variável de controle, equivalente a j = j + 1;
} while (j <= 5);

/*
Loop infinito

Ocorre quando a condição de parada nunca é atingida,
geralmente porque a variável de controle não é atualizada corretamente.

// Exemplo 1
while (true) {
  console.log("Loop infinito");
}

// Exemplo 2
let i = 1;

while (i <= 5) {
  console.log("i: " + i);
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

// Break
// Interrompe imediatamente a execução do loop

for (let k = 1; k <= 5; k++) {
  if (k === 3) {
    break;
  }

  console.log("k: " + k); // k: 1, k: 2, k: 3
}

// _____________________________________________________________________________________________________________________

// Continue
// Interrompe apenas a iteração atual e continua para a próxima

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
// Estrutura utilizada para armazenar múltiplos valores em uma única variável

// Array de strings

const technologies = ["HTML", "CSS", "JavaScript"];

console.log(technologies);

console.log(technologies.length); // 3

console.log(technologies[0]); // HTML
console.log(technologies[1]); // CSS
console.log(technologies[2]); // JavaScript

// Array de números

const numbersArray = [1, 2, 3, 4];

// Métodos auxiliares para arrays

console.log([1, 2, 3, 4].length); // 4

console.log([1, 2, 3, 4][0]); // 1
console.log([1, 2, 3, 4][3]); // 4

console.log([1, 2, 3, 4].push(5)); // 5 (novo tamanho do array)
console.log([1, 2, 3, 4].pop()); // 4 (elemento removido)
console.log([1, 2, 3, 4].shift()); // 1 (elemento removido)
console.log([1, 2, 3, 4].unshift(0)); // 5 (novo tamanho do array)

console.log([1, 2, 3, 4].includes(2)); // true
console.log([1, 2, 3, 4].indexOf(3)); // 2

console.log([1, 2, 3, 4].find((x) => x > 3)); // 4

console.log([1, 2, 3, 4].filter((x) => x > 3)); // [4]

console.log([1, 2, 3, 4].map((x) => x * 2)); // [2, 4, 6, 8]

[1, 2, 3, 4].forEach((x) => console.log(x));

console.log([1, 2, 3, 4].some((x) => x > 2)); // true

console.log([1, 2, 3, 4].every((x) => x > 0)); // true

console.log([1, 2, 3, 4].join(", ")); // "1, 2, 3, 4"

console.log([1, 2, 3, 4].slice(1)); // [2, 3, 4]

console.log([1, 2, 3, 4].splice(1, 1)); // [2]

// _____________________________________________________________________________________________________________________

// String x Array

let languageNameString = "JavaScript";

const technologiesArray = ["HTML", "CSS", "JavaScript"];

console.log(languageNameString[0]); // J
console.log(languageNameString.length); // 10

console.log(technologiesArray[0]); // HTML
console.log(technologiesArray.length); // 3

// Strings são imutáveis

languageNameString[0] = "T";

console.log(languageNameString); // JavaScript

// Arrays são mutáveis

technologiesArray[0] = "TypeScript";

console.log(technologiesArray);

// ["TypeScript", "CSS", "JavaScript"]

// _____________________________________________________________________________________________________________________

// OBJETOS
// Estrutura utilizada para representar uma entidade através de propriedades

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

// Object.freeze()
// Impede adicionar, remover ou alterar propriedades
Object.freeze(personFreezing);
personFreezing.nationality = "Brasileira";
personFreezing.name = "Sabrina B";
console.log(personFreezing);

// Object.seal()
// Impede adicionar ou remover propriedades,
// mas permite alterar valores existentes
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

const currentDate = new Date();
console.log(currentDate);
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth()); // 0 a 11
console.log(currentDate.getDate());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.toLocaleDateString("pt-BR"));
console.log(currentDate.toLocaleTimeString("pt-BR"));

// Exemplo de cadastro de usuário
const registrationDate = new Date();

console.log(
  "Usuário cadastrado em:",
  registrationDate.toLocaleDateString("pt-BR"),
);

console.log("Às:", registrationDate.toLocaleTimeString("pt-BR"));
