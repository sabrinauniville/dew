// Eventos de mouse
const btnMouse = document.querySelector("#btnMouse");
const areaMouse = document.querySelector("#areaMouse");

btnMouse.addEventListener("click", () => {
  alert("Botão clicado!");
});

areaMouse.addEventListener("mouseover", () => {
  areaMouse.textContent = "Mouse entrou!";
});

areaMouse.addEventListener("mouseout", () => {
  areaMouse.textContent = "Mouse saiu!";
});

// Eventos de teclado
const campoTeclado = document.querySelector("#campoTeclado");

campoTeclado.addEventListener("keydown", (event) => {
  console.log("Tecla pressionada:", event.key);
});

campoTeclado.addEventListener("keyup", (event) => {
  console.log("Tecla liberada:", event.key);
});

// Eventos de formulário
const form = document.querySelector("#formCadastro");
const nome = document.querySelector("#nome");

nome.addEventListener("focus", () => {
  console.log("Campo recebeu foco");
});

nome.addEventListener("blur", () => {
  console.log("Campo perdeu foco");
});

nome.addEventListener("change", () => {
  console.log("Valor alterado");
});

form.addEventListener("submit", () => {
  console.log("Formulário enviado");
});

// Eventos de janela
window.addEventListener("load", () => {
  console.log("Página carregada");
});

window.addEventListener("resize", () => {
  console.log("Largura:", window.innerWidth);
});

window.addEventListener("scroll", () => {
  console.log("Rolando a página...");
});

// Eventos de janela
const textoClipboard = document.querySelector("#textoClipboard");

textoClipboard.addEventListener("copy", () => {
  console.log("Texto copiado");
});

textoClipboard.addEventListener("cut", () => {
  console.log("Texto recortado");
});

textoClipboard.addEventListener("paste", () => {
  console.log("Texto colado");
});

// Cancelamento de comportameto padrão
form.addEventListener("submit", (event) => {
  event.preventDefault();

  alert("Envio cancelado para validação.");
});

// com links
const link = document.querySelector("#linkGoogle");

link.addEventListener("click", (event) => {
  event.preventDefault();

  alert("Navegação cancelada");
});

// Mensagem de erros personalizadas
const email = document.querySelector("#email");

email.addEventListener("invalid", () => {
  email.setCustomValidity("Informe um endereço de e-mail válido.");
});

email.addEventListener("input", () => {
  email.setCustomValidity("");
});
