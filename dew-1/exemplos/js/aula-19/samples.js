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
const itemToNavigate = document.querySelector(".my-list li");

// parentElement: acessa o elemento pai direto
const ancestralUl = itemToNavigate.parentElement;
console.log("Pai (ul):", ancestralUl);

// closest(): sobe na hierarquia até encontrar o seletor informado
const ancestralBody = itemToNavigate.closest("body");
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
const previousSibling = itemToNavigate.previousElementSibling;
console.log("Anterior:", previousSibling);

// próximo elemento
const nextSibling = itemToNavigate.nextElementSibling;
console.log("Próximo:", nextSibling);

// ============================================================
// MANIPULAÇÃO DE CONTEÚDO
// ============================================================

const title = document.getElementById("titulo");
console.log("Title element:", title);

// textContent: altera apenas texto puro (ignora HTML)
title.textContent = "Curso DOM JavaScript";
console.log("textContent:", title.textContent); // Curso DOM JavaScript

// innerText: obtém ou altera apenas o texto visível ao usuário
title.innerText = "Curso completo de front-end";
console.log("innerText:", title.innerText); // Curso completo de front-end

// innerHTML: permite inserir HTML dentro do elemento
title.innerHTML = "<strong>Curso completo de front-end</strong>";
console.log("innerHTML:", title.innerHTML);

// ============================================================
// VALUE (INPUTS / FORMULÁRIOS)
// ============================================================

const input = document.getElementById("nome");
console.log("input.value:", input.value); // Sabrina

input.value = "Sabrina B.";
console.log("input.value:", input.value); // Sabrina B.
console.log("input.getAttribute('value'):", input.getAttribute("value")); // valor inicial do HTML

const email = document.querySelector("#email");
email.value = "teste@email.com";
console.log("email.value:", email.value);

const message = document.querySelector("#mensagem");
console.log("message.value:", message.value);

const language = document.querySelector("#linguagem");
console.log("language.value:", language.value);

// ============================================================
// ADIÇÃO DE ELEMENTOS
// ============================================================

console.log("\n createElement():");

// Criação de um novo elemento em memória (não aparece ainda no DOM)
const newListItem = document.createElement("li");
newListItem.textContent = "TypeScript";

console.log("Elemento criado:", newListItem);

// ============================================================
// appendChild()
// ============================================================

console.log("\n appendChild():");
console.log("Lista antes:", list);

// adiciona o elemento no final da lista
list.appendChild(newListItem);

console.log("Lista depois do appendChild:", list);

// ============================================================
// append()
// ============================================================
console.log("\n append():");

// cria novos elementos (IMPORTANTE: não reutilizar os mesmos)
const secondNewItem = document.createElement("li");
secondNewItem.textContent = "React";

const thirdItem = document.createElement("li");
thirdItem.textContent = "Vue";

// adiciona múltiplos elementos de uma vez
list.append(secondNewItem, thirdItem);
console.log("Lista depois do append:", list);

// ============================================================
// insertBefore()
// ============================================================
console.log("\n insertBefore():");

// novo elemento a ser inserido
const myListNewItem = document.createElement("li");
myListNewItem.textContent = "Angular";

// elemento de referência (posição onde será inserido)
const referenceItem = list.children[1];
console.log("Elemento de referência:", referenceItem);

// insere antes do elemento de referência
list.insertBefore(myListNewItem, referenceItem);

console.log("Lista depois do insertBefore:", list);

// ============================================================
// REMOÇÃO DE ELEMENTOS
// ============================================================
// Remove(): remove um elemento específico
console.log("\n remove():");
console.log("list:", list);
const secondItem = list.children[1]; // children muda dinamicamente depois de remoções
console.log("Item que será removido:", secondItem);
secondItem.remove();
console.log("list:", list);

// RemoveChild(): remove um elemento filho específico
const firstItem = list.firstElementChild;

console.log("\n removeChild():");
console.log("Lista antes da remoção:", list);
list.removeChild(firstItem);
console.log("Lista após a remoção:", list);

// ============================================================
// SUBSTITUIÇÃO DE ELEMENTOS
// ============================================================

const newElement = document.createElement("li");
newElement.textContent = "HTML Semântico";

const newElements = [];
for (let i = 0; i <= 1; i++) {
  const item = document.createElement("li");
  item.textContent = "Filho adicionado dinamicamente";
  newElements.push(item);
}

// ReplaceChild(): substitui um filho específico do elemento
console.log("\n ReplaceChild():");
const lista = list.cloneNode(true);
const primeiroItemLista = lista.firstElementChild;

const novoItemLista = document.createElement("li");
novoItemLista.textContent = "CSS 3";
console.log("Lista antes:", lista.innerHTML);
console.log("Filho que será substituído:", primeiroItemLista.outerHTML);

lista.replaceChild(novoItemLista, primeiroItemLista);
console.log("Lista depois:", lista.innerHTML);

// ReplaceChildren(): substitui todos os filhos do elemento
console.log("\n ReplaceChildren():");
const lista2 = list.cloneNode(true);
console.log("Lista2:", lista2.innerHTML);

lista2.replaceChildren(...newElements); // o operador spread (...) é usado para passar cada elemento do array como argumento separado
console.log("Lista2 atualizada:", lista2.innerHTML);

// ============================================================
// Manipulação de atributos html
// ============================================================
console.log("\n getAttribute() e setAttribute():");
const card = document.querySelector(".card");
const dataType = card.getAttribute("data-tipo");
console.log("dataType:", dataType);

// setAttribute(): adiciona um atributo ao elemento
card.setAttribute("data-status", "ativo");

// getAttribute(): obtém o valor do atributo
let dataStatus = card.getAttribute("data-status");
console.log("dataStatus:", dataStatus);

// dataset: altera valores de um atributo
card.dataset.status = "inativo";
dataStatus = card.getAttribute("data-status");
console.log("dataStatus:", dataStatus);

// ============================================================
// ESTILOS CSS
// ============================================================
// Alterando estilos inline
// style: permite alterar estilos CSS diretamente no elemento
console.log("\n style(): ", card.style);
card.style.backgroundColor = "blue";
card.style.color = "white";

// classList: permite adicionar, remover e alternar classes CSS
console.log("\n classList(): ", card.classList);

// Adicionando classe CSS
card.classList.add("ativo");

// Removendo classe
card.classList.remove("card");

// Toggle: adiciona a classe se não existir, remove se existir
card.classList.toggle("card"); // card adicionado
card.classList.toggle("ativo"); // ativo removido

// Verificando se possui uma classe
console.log("classList.contains ativo?", card.classList.contains("ativo")); // true

// Sobrescreve todas as classes existentes
card.className = "card destaque";

// Obtendo estilo calculado pelo navegador
console.log(
  "\n getComputedStyle().backgroundColor:",
  getComputedStyle(card).backgroundColor,
);
