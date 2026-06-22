// Exemplo de seleção de elementos no DOM

// getElementById: seleciona um único elemento pelo atributo id
console.log("\nUso de getElementById");
const titulo = document.getElementById("titulo");
console.log(titulo); // retorna o elemento <h1> com id="titulo"

// _______________________________________________________________

// getElementsByClassName: seleciona todos os elementos com uma mesma classe (HTMLCollection dinâmica)
console.log("\nUso de getElementsByClassName");
const itens = document.getElementsByClassName("item");
console.log(itens); // retorna uma coleção HTMLCollection com todos os elementos .item

// _______________________________________________________________

// querySelector: seleciona o primeiro elemento que corresponde a um seletor CSS
console.log("\nUso de querySelector");
const paragrafo = document.querySelector("p");
console.log(paragrafo); // retorna o primeiro <p> encontrado no DOM

// _______________________________________________________________

// querySelectorAll: seleciona todos os elementos que correspondem a um seletor CSS
console.log("\nUso de querySelectorAll");
const cards = document.querySelectorAll(".card");
console.log(cards); // retorna uma NodeList com todos os elementos .card

// _____________________________________________________________________________________________________________________

// NAVEGAÇÃO ENTRE ELEMENTOS DO DOM

// parentElement: retorna o elemento pai direto de um nó
// closest(): sobe na hierarquia até encontrar o primeiro elemento que corresponde ao seletor
const itemToNavegate = document.querySelector("li");

const ancestralUl = itemToNavegate.parentElement;
console.log("Ancestral (pai):", ancestralUl);

const ancestralBody = itemToNavegate.closest("body");
console.log("Ancesntral (body):", ancestralBody);

// _______________________________________________________________

// DESCENDENTES
// Todos os filhos que existem dentro de um elemento como filhos direitos, netos, bisnetos...

// querySelectorAll dentro de um elemento: retorna todos os elementos filhos em qualquer nível
const list = document.querySelector("ul");

const descendents = list.querySelectorAll("li");
console.log("Todos os descendentes (li dentro do ul):", descendents);

// _______________________________________________________________

// FILHOS DIRETOS
// Apenas os elementos que estão imediatamente dentro do elemento pai

// children: retorna todos os filhos diretos (HTMLCollection)
const children = list.children;
console.log("Filhos diretos do ul:", children);

// firstElementChild: retorna o primeiro filho direto
const firstChild = list.firstElementChild;
console.log("Primeiro filho:", firstChild);

// lastElementChild: retorna o último filho direto
const lastChild = list.lastElementChild;
console.log("Último filho:", lastChild);

// _______________________________________________________________

// IRMÃOS (SIBLINGS)

// previousElementSibling: retorna o elemento irmão anterior
const previousSibling = itemToNavegate.previousElementSibling;
console.log("Irmão anterior:", previousSibling);

// nextElementSibling: retorna o próximo elemento irmão
const nextSibling = itemToNavegate.nextElementSibling;
console.log("Irmão posterior:", nextSibling);

// _____________________________________________________________________________________________________________________

// Captura e alteração de conteúdo
const title = document.getElementById("titulo");
console.log(title.textContent); // "Curso de JavaScript"

//textContent: altera o conteúdo de texto do elemento
title.textContent = "Curso DOM JavaScript";
console.log(title.textContent); // "Curso DOM JavaScript"

// innerText: altera o conteúdo de texto do elemento, mas respeita a formatação do HTML
title.innerText = "Curso completo de front-end";
console.log(title.innerText); // "Curso completo de front-end."

// innerHTML: altera o conteúdo do elemento, incluindo tags HTML
title.innerHTML = "<h1><strong>Curso completo de front-end.</strong></h1>";
console.log(title.innerHTML); // "<h1><strong>Curso completo de front-end.</strong></h1>"

// value: altera o valor de um elemento input
const input = document.getElementById("nome");
console.log(input.value); // "Sabrina"

input.value = "Sabrina B.";
console.log(input.value); // "Sabrina B."

const email = document.querySelector("#email");
email.value = "teste@email.com";

const mensagem = document.querySelector("#mensagem");
console.log(mensagem.value);

const linguagem = document.querySelector("#linguagem");
console.log(linguagem.value);

// _______________________________________________________________

// Adição de elemento html via js
const newListItem = document.createElement("li");
newListItem.textContent = "TypeScript";
document.querySelector("ul").appendChild(newListItem);
// _______________________________________________________________

// Remoção de elemento
const secondItem = document.querySelectorAll(".item")[1];
secondItem.remove();

// _______________________________________________________________

// Troca de elemento
const list = document.querySelector("ul");

const newElement = document.createElement("li");
newElement.textContent = "HTML Semântico";

const itemAtual = list.children[0];
list.replaceChild(newElement, itemAtual);

// _______________________________________________________________

// Alteração de estilos css
// style: altera o estilo inline do elemento
const card = document.querySelector(".card");
card.style.backgroundColor = "blue";
card.style.color = "white";
card.style.padding = "10px";

// classList: adiciona, remove ou alterna classes do elemento e com isso altera estilos
card.classList.add("ativo");
card.classList.remove("card");
card.classList.toggle("destaque");

// _____________________________________________________________________________________________________________________
