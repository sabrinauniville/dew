// ===============================
// EVENTOS DE MOUSE
// ===============================

const btnMouse = document.querySelector("#btnMouse");
const areaMouse = document.querySelector("#areaMouse");

btnMouse.addEventListener("click", (event) => {
  alert("Botão clicado!");

  // Analisando o object event
  console.log("Objeto event:", event);
  console.log("Tipo do evento:", event.type);
  console.log("Elemento clicado:", event.target);
  console.log("Posição X do clique:", event.clientX);
  console.log("Posição Y do clique:", event.clientY);
});

areaMouse.addEventListener("mouseover", (event) => {
  areaMouse.textContent = "Mouse entrou!";
  console.log("Tipo do evento:", event.type);
});

areaMouse.addEventListener("mouseout", (event) => {
  areaMouse.textContent = "Mouse saiu!";
  console.log("Tipo do evento:", event.type);
});

// ===============================
// FORMULÁRIO
// ===============================

const form = document.querySelector("#formCadastro");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const comentario = document.querySelector("#comentario");
const linguagem = document.querySelector("#linguagem");

// focus
nome.addEventListener("focus", (event) => {
  console.log("Campo nome recebeu foco");
  console.log("evento:", event);
});

// blur
nome.addEventListener("blur", () => {
  console.log("Campo nome perdeu foco");
});

// change
linguagem.addEventListener("change", () => {
  console.log("Linguagem escolhida:", linguagem.value);
});

// input
comentario.addEventListener("input", () => {
  console.log("Usuário está digitando...");
});

// ===============================
// EVENTOS DE TECLADO
// ===============================

comentario.addEventListener("keydown", (event) => {
  console.log("evento:", event);
  console.log("Tecla pressionada:", event.key);
});

comentario.addEventListener("keyup", (event) => {
  console.log("Tecla liberada:", event.key);
});

// ===============================
// CLIPBOARD
// ===============================

comentario.addEventListener("copy", (event) => {
  console.log("evento:", event);
  console.log("Texto copiado");
});

comentario.addEventListener("cut", (event) => {
  console.log("evento:", event);
  console.log("Texto recortado");
});

comentario.addEventListener("paste", (event) => {
  console.log("evento:", event);
  console.log("Texto colado");
});

// ===============================
// MENSAGENS PERSONALIZADAS
// ===============================

email.addEventListener("invalid", () => {
  email.setCustomValidity("Por favor, informe um endereço de e-mail válido.");
});

email.addEventListener("input", () => {
  email.setCustomValidity("");
});

// ===============================
// CANCELAMENTO DO ENVIO
// ===============================

form.addEventListener("submit", (event) => {
  // impede envio real do formulário
  event.preventDefault();

  console.log("Formulário enviado");

  alert("Formulário validado e envio cancelado!");
});

// ===============================
// CANCELAMENTO DE LINK
// ===============================

const linkGoogle = document.querySelector("#linkGoogle");

linkGoogle.addEventListener("click", (event) => {
  console.log("evento:", event);
  event.preventDefault();
  console.log("Navegação cancelada!");
  alert("Navegação cancelada!");
});

// ===============================
// EVENTOS DE JANELA
// ===============================

window.addEventListener("load", () => {
  console.log("Página carregada");
});

window.addEventListener("resize", () => {
  console.log(`Nova largura da janela: ${window.innerWidth}px`);
});

window.addEventListener("scroll", () => {
  console.log("Usuário está rolando a página");
});

/* Formulários */
const formBusca = document.querySelector("#formBusca");
formBusca.addEventListener("submit", (event) => {
  event.preventDefault();

  // Exemplo de obteção de dados pelo .value
  const produto = document.querySelector("#produto").value;
  const categoria = document.querySelector("#categoria").value;

  console.log("Formulário de busca - evento:", event);
  console.log("Value Produto:", produto);
  console.log("Value Categoria:", categoria);

  // Exemplo de obtenção de dados pelo formData
  const formBuscaDados = new FormData(formBusca);
  const formBuscaDadosProduto = formBuscaDados.get("produto");
  const formBuscaDadosCategoria = formBuscaDados.get("categoria");

  console.log("FormData produto:", formBuscaDadosProduto);
  console.log("FormData categoria:", formBuscaDadosCategoria);

  // exibir todos os valores deste formulário
  for (let [key, value] of formBuscaDados.entries()) {
    console.log("chave: " + key + ", valor: " + value);
  }

  // exemplo de obtenção de dados pelo urlSearchParams
  // o exemplo baixo só funcionaria caso tivessemos uma url nessa estrutura: http://localhost:5500/index.html?produto=notebook&categoria=informatica
  const params = new URLSearchParams(window.location.search);
  console.log("URLSearchParams produto:", params.get("produto"));
  console.log("URLSearchParams categoria:", params.get("categoria"));
});
