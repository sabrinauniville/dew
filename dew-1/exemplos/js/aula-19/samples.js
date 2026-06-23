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
// Seleção e alteração do conteúdo de um elemento
const newListElement = document.createElement("li");

//TextContent altera o conteúdo de um elemento
newListElement.textContent = "Sou um novo item";
console.log(newListElement);

// _____________________________________________________________________________________________________________________

// ADIÇÃO DE ELEMENTOS
// Seleção e adição de um novo elemento filho
const list = document.querySelector("ul");

// AppendChild adiciona um elemento filho no final da lista
list.appendChild(newListElement);
console.log(list);

// Append adiciona um elemento filho no final da lista
list.append("Fim da lista ");
console.log(list);

const anotherNewListElement = document.createElement("li");
anotherNewListElement.textContent = "Git";

// Prepend adiciona um elemento filho no início da lista
list.prepend(anotherNewListElement);
console.log(list);

const otherNewListElement = document.createElement("li");
otherNewListElement.textContent = "GitHub";

// InsertBefore adiciona um elemento filho antes de outro elemento filho
list.insertBefore(otherNewListElement, anotherNewListElement);
console.log(list);

// _____________________________________________________________________________________________________________________

// REMOÇÃO DE ELEMENTOS
const secondItemOfList = document.querySelectorAll("li")[1];

// Remove remove um elemento da lista
secondItemOfList.remove();
console.log(list);

// RemoveChild remove um elemento filho da lista
const itemToRemove = list.children[0];
list.removeChild(itemToRemove);
console.log(list);

// _____________________________________________________________________________________________________________________
