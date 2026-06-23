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
