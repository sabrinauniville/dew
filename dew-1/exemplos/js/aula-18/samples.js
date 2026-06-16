// LAÇOS DE REPETIÇÃO (LOOPS)
// Permitem repetir um bloco de código várias vezes

// While
// Repete um bloco de código enquanto uma condição for verdadeira
// Usado quando não sabemos quantas repetições serão necessárias
let i = 1; // Variável de controle

while (i <= 5) {
  // Condição de parada
  console.log("i: " + i);

  i++; // Atualização da variável de controle
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
Ocorre quando a condição de parada nunca é atingida, geralmente por um erro de código.

// Exemplo 1
while (true) {
  console.log("Loop infinito");
}

// Exemplo 2
let i = 1;

while (i <= 5) {
  console.log("i: " + i);
}

// Erro: variável de controle nunca é atualizada (incrementada) corretamente.
// Para evitar isso, vertifique se essa variável está sendo atualizada (incrementada ou decrementada) corretamente para em alguma situação encerrar as repetições */

// _____________________________________________________________________________________________________________________

// For
// Utilizado quando a quantidade de repetições é conhecida e há uma variável de controle
for (
  let k = 1; // Variável de controle
  k <= 5; // Condição de parada
  k++ // Atualização da variável de controle
) {
  console.log("k: " + k);
}

/*
k = 1 → imprime 1
k = 2 → imprime 2
k = 3 → imprime 3
k = 4 → imprime 4
k = 5 → imprime 5
k = 6 → condição falsa → loop encerrado
*/
// _____________________________________________________________________________________________________________________

// Break
// Interrompe imediatamente a execução do loop

for (let k = 1; k <= 5; k++) {
  if (k === 3) {
    break; // sem o break, seria exibido até k: 5, mas com ele, é exibido somente até k: 2
  }

  console.log("k: " + k);
}

// _____________________________________________________________________________________________________________________

// Continue
// Interrompe apenas a iteração atual e continua para a próxima

for (let k = 1; k <= 5; k++) {
  if (k === 3) {
    continue; // sem o continue, seria exibido até o k: 5, com ele, será pulada a exibição do k: 3
  }

  console.log("k: " + k);
}

// _____________________________________________________________________________________________________________________

// Laços de repetição aninhados
// Um laço de repetição declarado dentro de outro laço de repetição

for (let a = 1; a <= 2; a++) {
  // Laço externo
  // Executará 2 vezes (a = 1 e a = 2)

  for (let b = 1; b <= 3; b++) {
    // Laço interno
    // Para cada valor de "a", executará 3 vezes (b = 1, 2 e 3)

    console.log("b: " + b);
  }

  // Só será executado após o término completo do laço interno
  console.log("a: " + a);
}

/*
b: 1
b: 2
b: 3
a: 1
b: 1
b: 2
b: 3
a: 2

O laço interno é executado completamente antes que o laço externo avance para a próxima repetição.
*/

// _____________________________________________________________________________________________________________________

// ARRAYS
// Estrutura utilizada para armazenar múltiplos valores em uma única variável

// Array de strings
// Strings são listas de caracteres
const technologies = ["HTML", "CSS", "JavaScript"]; // index [0,1,2]
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
console.log([1, 2, 3, 4].push(5)); // 5
console.log([1, 2, 3, 4].pop()); // 4
console.log([1, 2, 3, 4].shift()); // 1
console.log([1, 2, 3, 4].unshift(0)); // 5
console.log([1, 2, 3, 4].includes(2)); // true
console.log([1, 2, 3, 4].indexOf(3)); // 2
console.log([1, 2, 3, 4].find((x) => x > 3)); // 4
console.log([1, 2, 3, 4].filter((x) => x > 3)); // [4]
console.log([1, 2, 3, 4].map((x) => x * 2)); // (4) [2, 4, 6, 8]
console.log([1, 2, 3, 4].forEach((x) => console.log(x))); // 1, 2, 3, 4
console.log([1, 2, 3, 4].some((x) => x > 2)); // true
console.log([1, 2, 3, 4].every((x) => x > 0)); // true
console.log([1, 2, 3, 4].join(", ")); // 1, 2, 3, 4
console.log([1, 2, 3, 4].slice(1)); // (3) [2, 3, 4]
console.log([1, 2, 3, 4].splice(1, 1)); // [2]

// String x Array
let languageNameString = "JavaScript";
const technologiesArray = ["HTML", "CSS", "JavaScript"];
console.log(languageNameString[0]); // J
console.log(languageNameString.length); // 10
console.log(technologiesArray[0]); // HTML
console.log(technologiesArray.length); // 3

//Não é possível trocar um caracter de uma string
languageNameString[0] = "T";
console.log(languageNameString); // JavaScript

// Já com uma string, conseguimos
technologiesArray[0] = "TypeScript";
console.log(technologiesArray); // ["TypeScript", "CSS", "JavaScript"]

// _____________________________________________________________________________________________________________________

// OBJETOS
// Estrutura utilizada para representar uma entidade através de propriedades
const labrador = {
  name: "Rex",
  age: 3,
  breed: "Labrador",
};
console.log(labrador.name); // Labrador
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
console.log(person);

// Acesso utilizando ponto
console.log(person.name);

// Acesso utilizando colchetes
console.log(person["age"]);

// Alteração de valor
person.age = 50;
console.log(person);

// Adição de propriedade
person.course = "JavaScript";
console.log(person);

// Acesso de valor de lista dentro de objeto
person.technologies[0];
person.technologies.push("Angular");

// Métodos para objetos
Object.keys(person); // (4) ['name', 'age', 'technologies', 'talk']
Object.values(person); // (4) ['Sabrina', 40, Array(3), ƒ]
Object.entries(person); // (4) [Array(2), Array(2), Array(2), Array(2)]
Object.assign(person, {}); // {name: 'Sabrina', age: 40, technologies: Array(3), talk: ƒ}
Object.freeze(person); // {name: 'Sabrina', age: 40, technologies: Array(3), talk: ƒ}
Object.seal(person); // {name: 'Sabrina', age: 40, technologies: Array(3), talk: ƒ}
person.hasOwnProperty("name"); // true

// Acionamento de método dentro de objeto
person.talk("oi");

// Função x método
function talk(text) {
  console.log(text);
}
talk("oi"); // chamada de função

person.talk("oi"); // chamada de método dentro de objeto

_____________________________________________________________________________________________________________________;

// Verificação de tipo de arrays
// Forma errada de verificar
const numbers = [10, 20, 30];
console.log(typeof numbers); // "object"

// Forma correta de verificar
console.log(Array.isArray(numbers)); // true

// Comparando array x objeto
// Forma incorreta
console.log(typeof numbers); // "object"
console.log(typeof person); // "object"

// Forma correta
console.log(Array.isArray(numbers)); // true
console.log(Array.isArray(student)); // false

// _____________________________________________________________________________________________________________________

// ARRAY DE OBJETOS
// Muito utilizado em APIs e sistemas reais
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

// Acesso aos valores
console.log(students[0].name); // Ana
console.log(students[1].age); // 22

// Percorrendo um array de objetos
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}

// _____________________________________________________________________________________________________________________

// DATE
// Utilizado para trabalhar com datas e horários
const currentDate = new Date();
console.log(currentDate);

// Ano atual
console.log(currentDate.getFullYear()); // 2026

// Mês atual (0 a 11)
console.log(currentDate.getMonth()); // 5

// Dia do mês
console.log(currentDate.getDate()); // 16

// Hora atual
console.log(currentDate.getHours()); // 18

// Minutos atuais
console.log(currentDate.getMinutes()); // 28

// Formatação de data
console.log(currentDate.toLocaleDateString("pt-BR")); // 16/06/2026

// Formação de hora
console.log(currentDate.toLocaleTimeString("pt-BR")); // 18:28:41

// Exemplo de Data e hora do cadastro do usuário
const registrationDate = new Date();

console.log("Usuário cadastrado em:", registrationDate.toLocaleDateString()); // Usuário cadastrado em: 16/06/2026

console.log("Às:", registrationDate.toLocaleTimeString()); // Às: 14:35:20

// _____________________________________________________________________________________________________________________
