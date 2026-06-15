// _____________________________________________________________________________________________________________________

// LAÇOS DE REPETIÇÃO (LOOPS)
// Permitem repetir um bloco de código várias vezes

// While
// Repete um bloco de código enquanto uma condição for verdadeira
// Usado quando não sabemos quantas repetições serão necessárias
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

// _____________________________________________________________________________________________________________________

// ARRAYS
// Estrutura utilizada para armazenar múltiplos valores em uma única variável

const numbers = [10, 20, 30, 40];

console.log(numbers);

console.log(numbers[0]); // 10
console.log(numbers[3]); // 40

// Quantidade de elementos
console.log(numbers.length); // 4

// Adiciona elemento ao final do array
numbers.push(50);

console.log(numbers);

// Remove o último elemento
numbers.pop();

console.log(numbers);

// Adiciona elemento ao início
numbers.unshift(5);

console.log(numbers);

// Remove o primeiro elemento
numbers.shift();

console.log(numbers);

// Verifica se existe um elemento
console.log(numbers.includes(20)); // true

// Retorna a posição de um elemento
console.log(numbers.indexOf(30)); // 2

// _____________________________________________________________________________________________________________________

// ARRAY DE STRINGS

const technologies = ["HTML", "CSS", "JavaScript"];

console.log(technologies);

console.log(technologies[0]); // HTML
console.log(technologies[1]); // CSS
console.log(technologies[2]); // JavaScript

// _____________________________________________________________________________________________________________________

// OBJETOS
// Estrutura utilizada para representar uma entidade através de propriedades

const student = {
  name: "Sabrina",
  age: 32,
  approved: true,
};

console.log(student);

// Acesso utilizando ponto
console.log(student.name);

// Acesso utilizando colchetes
console.log(student["age"]);

// Alteração de valor
student.age = 33;

console.log(student);

// Adição de propriedade
student.course = "JavaScript";

console.log(student);

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

// FUNÇÃO
// Bloco de código reutilizável

function sum(number1, number2) {
  return number1 + number2;
}

console.log(sum(10, 5)); // 15

// _____________________________________________________________________________________________________________________

// MÉTODO
// Função que pertence a um objeto

const languageName = "JavaScript";

console.log(languageName.toUpperCase());

// Diferença:
//
// Função:
// sum(10, 5);
//
// Método:
// languageName.toUpperCase();

// _____________________________________________________________________________________________________________________

// MÉTODOS DE ARRAYS
// Funções prontas para manipular arrays

const grades = [7, 8, 5, 10];

// forEach()
// Executa uma função para cada elemento

grades.forEach(function (grade) {
  console.log(grade);
});

// map()
// Cria um novo array transformando os valores

const gradesMultipliedByTen = grades.map(function (grade) {
  return grade * 10;
});

console.log(gradesMultipliedByTen);

// filter()
// Retorna apenas elementos que atendem a uma condição

const approvedGrades = grades.filter(function (grade) {
  return grade >= 7;
});

console.log(approvedGrades);

// find()
// Retorna o primeiro elemento encontrado

const firstApprovedGrade = grades.find(function (grade) {
  return grade >= 7;
});

console.log(firstApprovedGrade);

// some()
// Verifica se pelo menos um elemento atende à condição

console.log(
  grades.some(function (grade) {
    return grade === 10;
  }),
);

// every()
// Verifica se todos os elementos atendem à condição

console.log(
  grades.every(function (grade) {
    return grade >= 5;
  }),
);

// _____________________________________________________________________________________________________________________

// DATE
// Utilizado para trabalhar com datas e horários

const currentDate = new Date();

console.log(currentDate);

// Ano atual
console.log(currentDate.getFullYear());

// Mês atual (0 a 11)
console.log(currentDate.getMonth());

// Dia do mês
console.log(currentDate.getDate());

// Hora atual
console.log(currentDate.getHours());

// Minutos atuais
console.log(currentDate.getMinutes());

// _____________________________________________________________________________________________________________________

// JAVASCRIPT E HTML
// O JavaScript pode selecionar, ler e alterar elementos da página

/*
<h1 id="title">Curso de JavaScript</h1>
<p class="description">Aprendendo DOM</p>
<button id="btn">Clique aqui</button>
*/

// _____________________________________________________________________________________________________________________

// SELEÇÃO DE ELEMENTOS

// Seleção por id

const title = document.getElementById("title");

console.log(title);

// Seleção utilizando seletores CSS

const titleByQuerySelector = document.querySelector("#title");

console.log(titleByQuerySelector);

// Seleção por classe

const description = document.querySelector(".description");

console.log(description);

// _____________________________________________________________________________________________________________________

// MANIPULAÇÃO DE CONTEÚDO

title.textContent = "JavaScript Moderno";

// _____________________________________________________________________________________________________________________

// EVENTOS
// Permitem executar ações quando algo acontece na página

const button = document.querySelector("#btn");

// Evento de clique

button.addEventListener("click", function () {
  console.log("Botão clicado");
});

// _____________________________________________________________________________________________________________________

// EVENTO UTILIZANDO FUNÇÃO

function showMessage() {
  console.log("Evento executado");
}

button.addEventListener("click", showMessage);
