// ============================================================
// SELEÇÃO DE ELEMENTOS
// ============================================================

// getElementById: seleciona um elemento pelo ID
console.log("\nUso de getElementById");
const titulo = document.getElementById("titulo");
console.log(titulo); // <h1 id="titulo">Curso de JavaScript</h1>

// getElementsByClassName: retorna coleção de elementos com a mesma classe
console.log("\nUso de getElementsByClassName");
const itens = document.getElementsByClassName("item");
console.log(itens); // HTMLCollection(2) [p.item, p.item]

// querySelector: retorna o primeiro elemento que combina com o seletor CSS
console.log("\nUso de querySelector");
const primeiroParagrafo = document.querySelector("p");
console.log(primeiroParagrafo); // primeiro <p>

// querySelectorAll: retorna TODOS os elementos que combinam com o seletor CSS
console.log("\nUso de querySelectorAll");
const cards = document.querySelectorAll(".card");
console.log(cards); // NodeList(2)

// ============================================================
// NAVEGAÇÃO NO DOM
// ============================================================

// seleciona primeiro item da lista
const itemToNavegate = document.querySelector(".my-list li");

// parentElement: acessa o elemento pai direto
const ancestralUl = itemToNavegate.parentElement;
console.log("Pai (ul):", ancestralUl);

// closest(): sobe na hierarquia até encontrar o seletor informado
const ancestralBody = itemToNavegate.closest("body");
console.log("Ancestral (body):", ancestralBody);

// ============================================================
// DESCENDENTES
// ============================================================

const list = document.querySelector(".my-list");

// todos os descendentes (li dentro da ul)
const descendents = list.querySelectorAll("li");
console.log("Descendentes:", descendents);

// ============================================================
// FILHOS DIRETOS
// ============================================================

// children: apenas filhos diretos
const children = list.children;
console.log("Filhos diretos:", children);

// primeiro filho
const firstChild = list.firstElementChild;
console.log("Primeiro filho:", firstChild);

// último filho
const lastChild = list.lastElementChild;
console.log("Último filho:", lastChild);

// ============================================================
// IRMÃOS (SIBLINGS)
// ============================================================

// elemento anterior
const previousSibling = itemToNavegate.previousElementSibling;
console.log("Anterior:", previousSibling);

// próximo elemento
const nextSibling = itemToNavegate.nextElementSibling;
console.log("Próximo:", nextSibling);

// ============================================================
// MANIPULAÇÃO DE CONTEÚDO
// ============================================================

const title = document.getElementById("titulo");

// textContent: altera apenas texto puro (ignora HTML)
console.log(title.textContent); // Curso de JavaScript
title.textContent = "Curso DOM JavaScript";

// innerText: respeita estilo visual do CSS
title.innerText = "Curso completo de front-end";

// innerHTML: permite inserir HTML dentro do elemento
title.innerHTML = "<strong>Curso completo de front-end</strong>";

// ============================================================
// VALUE (INPUTS / FORMULÁRIOS)
// ============================================================

const input = document.getElementById("nome");
console.log(input.value); // Sabrina

input.value = "Sabrina B.";

const email = document.querySelector("#email");
email.value = "teste@email.com";

const mensagem = document.querySelector("#mensagem");
console.log(mensagem.value);

const linguagem = document.querySelector("#linguagem");
console.log(linguagem.value);

// ============================================================
// ADIÇÃO DE ELEMENTOS
// ============================================================

const newListItem = document.createElement("li");
newListItem.textContent = "TypeScript";

list.appendChild(newListItem); // adiciona no final

// Append também pode ser usado para adicionar múltiplos elementos
list.append();

// insertBefore(): insere um elemento antes de outro elemento específico
const myList = document.querySelector(".my-list");
const myListNewItem = document.createElement("li");
myListNewItem.textContent = "Angular";

// seleciona o segundo item da lista ("CSS")
const referenceItem = myList.children[1];

// insere "Angular" antes de "CSS"
myList.insertBefore(myListNewItem, referenceItem);
console.log("myList:", myList);

// Remove(): remove um elemento específico
console.log("myList:", myList);
const secondItem = document.querySelectorAll(".my-list li")[1];
console.log("Item que será removido:", secondItem);
secondItem.remove();
console.log("myList:", myList);

// RemoveChild(): remove um elemento filho específico
console.log("myList:", myList);
const myList = document.querySelector(".my-list");
const firstItem = myList.firstElementChild;
console.log("Lista antes da remoção:", myList);
myList.removeChild(firstItem);
console.log("myList:", myList);

// ============================================================
// REMOÇÃO DE ELEMENTOS
// ============================================================

// remove segundo item da classe .item
const secondItem = document.querySelectorAll(".item")[1];
secondItem.remove();

// ============================================================
// SUBSTITUIÇÃO DE ELEMENTOS
// ============================================================

const newElement = document.createElement("li");
newElement.textContent = "HTML Semântico";

const itemAtual = list.children[0];
list.replaceChild(newElement, itemAtual);

// ============================================================
// ESTILOS CSS
// ============================================================

const card = document.querySelector(".card");

// Alterando estilos inline
card.style.backgroundColor = "blue";
card.style.color = "white";

// Adicionando classe CSS
card.classList.add("ativo");

// Removendo classe
card.classList.remove("card");

// Alternando classe
card.classList.toggle("destaque");

// Verificando se possui uma classe
console.log(card.classList.contains("ativo")); // true

// Alterando todas as classes
card.className = "card destaque";

// Obtendo estilo calculado pelo navegador
console.log(getComputedStyle(card).backgroundColor);
