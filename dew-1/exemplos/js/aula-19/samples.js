// ============================================================
// SELEÇÃO DE ELEMENTOS
// ============================================================
console.log("Exemplo de seleção de elementos no DOM");

// getElementById: seleciona um elemento pelo ID
console.log("\ngetElementById (titulo)");
const title = document.getElementById("titulo");
console.log(title); // <h1 id="titulo">JavaScript</h1>

// getElementsByClassName: retorna coleção de elementos com a mesma classe
console.log("\ngetElementsByClassName (item)");
const items = document.getElementsByClassName("item");
console.log(items); // HTMLCollection(2) [p.item, p.item]

// querySelector: retorna o primeiro elemento que combina com o seletor CSS
console.log("\nquerySelector (card)");
const firstCard = document.querySelector(".card");
console.log(firstCard); // primeiro elemento com a classe "card"

// querySelectorAll: retorna TODOS os elementos que combinam com o seletor CSS
console.log("\nquerySelectorAll (card)");
const allCards = document.querySelectorAll(".card");
console.log(allCards); // NodeList(2)

// ============================================================
// NAVEGAÇÃO NO DOM
// ============================================================
console.log("\n\n\nExemplo de navegação no DOM");
// seleciona primeiro item da lista
const itemGrandChild = document.querySelectorAll(".card-grandchild")[1]; // seleciona o neto na segunda posição (index 1)

// parentElement: acessa o elemento pai direto
const itemParent = itemGrandChild.parentElement;
console.log("\nPai (parentElement de itemGrandChild):", itemParent);

// closest(): sobe na hierarquia até encontrar o seletor informado
const itemAncestral = itemGrandChild.closest("body");
console.log("Ancestral (body):", itemAncestral);

// ============================================================
// DESCENDENTES E FILHOS DIRETOS
// ============================================================
const list = document.querySelector(".lists");
const cardList = document.querySelector(".cards");
const textList = document.querySelector(".texts");

// descendentes: todos os elementos filhos, netos, bisnetos, etc.
const descendents = cardList.querySelectorAll("span");
console.log("Descendentes (cards):", descendents);

// children: apenas filhos diretos
const children = cardList.children;
console.log("Filhos diretos (cards):", children);

// primeiro filho
const firstChild = cardList.firstElementChild;
console.log("Primeiro filho (cards):", firstChild);

// último filho
const lastChild = cardList.lastElementChild;
console.log("Último filho (cards):", lastChild);

// ============================================================
// IRMÃOS (SIBLINGS)
// ============================================================

// todos os seus irmãos a partir de seu pai
const allSiblings = itemGrandChild.parentElement.children;
console.log("Todos os irmãos (cards-grandchild):", allSiblings);

// irmão anterior
const previousSibling = itemGrandChild.previousElementSibling;
console.log(
  "Irmão anterior (referência cards-grandchild filho índice 1):",
  previousSibling,
);

// próximo irmão
const nextSibling = itemGrandChild.nextElementSibling;
console.log(
  "Irmão posterior (referência  cards-grandchild filho índice 1):",
  nextSibling,
);

// ============================================================
// MANIPULAÇÃO DE CONTEÚDO
// ============================================================
console.log("\n\n\nExemplo manipulação de conteúdo no DOM");

// textContent: altera apenas texto puro (ignora HTML)
console.log("Título textContent:", title.textContent);

// innerText: obtém ou altera apenas o texto visível ao usuário
console.log("Título innerText:", title.innerText);

// innerHTML interpreta HTML.
// Deve ser usado com cuidado, pois pode substituir todo o conteúdo
// existente e gerar vulnerabilidades de segurança (XSS) se receber dados vindos do usuário.
console.log("Título innerHTML:", title.innerHTML);
title.innerHTML = "<strong>Aprendendo JavaScript Front-end</strong>";
console.log("Título innerHTML alterado:", title.innerHTML);

// ============================================================
// VALUE (INPUTS / FORMULÁRIOS)
// ============================================================
// .value: obtém ou altera o valor de um input
console.log("\n.value:");
const input = document.getElementById("nome");
console.log("\ninput.value:", input.value); // Sabrina

input.value = "Sabrina B.";
console.log("input.value:", input.value); // Sabrina B.

// .getAttribute: obtém o valor do atributo do elemento (não altera o valor do input)
console.log("\n.getAttribute:");
console.log("input.getAttribute('value'):", input.getAttribute("value")); // valor inicial do HTML

// ============================================================
// ADIÇÃO DE ELEMENTOS
// ============================================================
console.log("\n createElement():");

// .createElement(): criação de um novo elemento em memória (não aparece ainda no DOM)
const newListItem = document.createElement("li");
newListItem.textContent = "TypeScript";
console.log("Elemento criado:", newListItem);

const secondNewItem = document.createElement("li");
secondNewItem.textContent = "React";

const thirdItem = document.createElement("li");
thirdItem.textContent = "Vue";

const myListNewItem = document.createElement("li");
myListNewItem.textContent = "Angular";

// ============================================================
// INJEÇÃO DE ELEMENTOS NO DOM
// ============================================================
console.log("Lista antes do appendChild:", textList.innerHTML);

// .appendChild(): adiciona um elemento como último filho de outro
console.log("\n appendChild():");
textList.appendChild(newListItem);
console.log("Lista depois do appendChild:", textList.innerHTML);

// append(): adiciona um ou mais elementos ao final de outro elemento
console.log("\n append():");
textList.append(secondNewItem, thirdItem);
console.log("Lista depois do append:", textList.innerHTML);

// insertBefore(): adiciona um elemento acima de outro a partir de um elemento de referencia (o novo elemento tomará a sua posição e índice)
console.log("\n insertBefore():");
const referenceItem = textList.children[1];
console.log("Elemento de referência:", referenceItem);

textList.insertBefore(myListNewItem, referenceItem);
console.log("Lista depois da inserção:", textList.innerHTML);

// ============================================================
// REMOÇÃO DE ELEMENTOS
// ============================================================

// Remove(): remove um elemento específico
console.log("\n remove():");
const secondItem = textList.children[1]; // children muda dinamicamente depois de remoções
console.log("Item que será removido:", secondItem);
secondItem.remove();
console.log("list depois da remoção:", textList.innerHTML);

// RemoveChild(): remove um elemento filho específico
console.log("\n removeChild():");
const firstItem = textList.firstElementChild;
console.log("Item que será removido:", firstItem);
textList.removeChild(firstItem);
console.log("Lista depois da remoção:", textList.innerHTML);

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

// replaceChild(novoFilho, filhoAntigo): substitui um elemento filho por outro.
console.log("\n ReplaceChild():");
const lista = textList.cloneNode(true); // cloneNode cria uma cópia em memória, alterações feitas nela não modificam a página, usado para fins didáticos.
const primeiroItemLista = lista.firstElementChild;

const novoItemLista = document.createElement("li");
novoItemLista.textContent = "CSS 3";

console.log("Filho que será substituído:", primeiroItemLista.outerHTML);
console.log("Filho que será inserido:", novoItemLista.outerHTML);

lista.replaceChild(novoItemLista, primeiroItemLista);
console.log("Lista depois da substituição:", lista.innerHTML);

// ReplaceChildren(): substitui todos os filhos do elemento
console.log("\n ReplaceChildren():");
const lista2 = textList.cloneNode(true);
console.log("Filhos atuais da lista:", lista2.innerHTML);

lista2.replaceChildren(...newElements); // o operador spread (...) é usado para passar cada elemento do array como argumento separado
console.log("Filhos da lista após atualização:", lista2.innerHTML);

// ============================================================
// Manipulação de atributos html
// ============================================================
console.log("\n\n\nExemplo manipulação de atributos no DOM");
console.log("\n getAttribute() e setAttribute():");
const dataType = firstCard.getAttribute("data-tipo");
console.log("Pegando valor de atributo (data-tipo):", dataType);

// setAttribute(): adiciona um atributo ao elemento
firstCard.setAttribute("data-status", "ativo");

// getAttribute(): obtém o valor do atributo
let dataStatus = firstCard.getAttribute("data-status");
console.log("Pegando valor de atributo (data-status):", dataStatus);

// dataset: altera valores de um atributo
firstCard.dataset.status = "inativo";
dataStatus = firstCard.getAttribute("data-status");
console.log("Pegando valor de atributo atualizado (data-status):", dataStatus);

// ============================================================
// ESTILOS CSS
// ============================================================
console.log("\n\n\nExemplo de alteração de estilos CSS no DOM");

// Alterando estilos inline
// style: permite alterar estilos CSS diretamente no elemento
console.log("\n style(): ", firstCard.style);
firstCard.style.backgroundColor = "blue";
firstCard.style.color = "white";

// classList: permite adicionar, remover e alternar classes CSS
console.log("\n classList(): ", firstCard.classList);

// Adicionando classe CSS
firstCard.classList.add("ativo");

// Removendo classe
firstCard.classList.remove("oculto");

// Toggle: adiciona a classe se não existir, remove se existir
firstCard.classList.toggle("oculto"); // adiciona "oculto" se não existir
firstCard.classList.toggle("ativo"); // remove "ativo" se existir

// Verificando se possui uma classe
console.log("classList.contains ativo?", firstCard.classList.contains("ativo")); // falso
console.log(
  "classList.contains oculto?",
  firstCard.classList.contains("oculto"),
); // true

// Sobrescreve todas as classes existentes
firstCard.className = "card destaque";

// Obtendo estilo calculado pelo navegador
console.log(
  "\ngetComputedStyle().backgroundColor:",
  getComputedStyle(firstCard).backgroundColor,
);
