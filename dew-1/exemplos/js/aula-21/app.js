const nasaService = new NasaService();

const titleElement = document.getElementById("photo-title");
const dateElement = document.getElementById("photo-date");
const descriptionElement = document.getElementById("photo-description");
const imageElement = document.getElementById("photo-image");
const requestDataOutput = document.getElementById("get-data-response");
const updateDataButton = document.getElementById("update-data");
const updateDataOutput = document.getElementById("update-data-response");

let statusMessage = "Aguardando resposta da API da NASA...";
requestDataOutput.textContent = statusMessage;

// Função tradicional (anônima)
// É passada como callback para o evento click do botão
updateDataButton.addEventListener("click", function () {
  console.log("This em um function: ", this); // this em uma função tradicional se refere ao elemento que disparou o evento (no caso, o botão)
});

/*
// Função tradicional (definida durante o uso)
document.addEventListener("DOMContentLoaded", function carregarPagina() {
  loadPhotoOfTheDay();
});

// função tradicional (definida antes do uso)
function carregarPagina() {
  loadPhotoOfTheDay();
}

document.addEventListener("DOMContentLoaded",  carregarPagina());
*/

// Arrow function
document.addEventListener("DOMContentLoaded", () => {
  //DOMContentLoaded: Evento que é disparado quando o HTML foi carregado e analisado, sem aguardar o CSS, imagens e subframes terminarem de carregar.
  updateDataButton.disabled = true; // Desabilita o botão até que a requisição atual seja concluída
  updateDataButton.addEventListener("click", () => {
    console.log("This em um arrow function: ", this); // this em um arrow function se refete ao objeto global (window)
    loadPhotoOfTheDay(); // Chamada para atualizar a foto do dia quando o botão for clicado
  });

  loadPhotoOfTheDay(); // Chamada inicial para carregar a foto do dia quando a página é carregada
});

// Função assincrona que retorna uma Promise
async function loadPhotoOfTheDay() {
  try {
    updateStatus("Carregando...");
    requestDataOutput.textContent = statusMessage;
    updateDataButton.disabled = true;

    // Uso de wait para aguardar a resposta da API da NASA
    // O await só pode ser usado dentro de funções assíncronas (async)
    // Faz com que a execução da função seja pausada até que a Promise seja resolvida
    const photo = await nasaService.getPhotoOfTheDay(); // 3 Chamada usando Fetch API (ES6)

    render(photo);

    updateStatus("");
    updateDataButton.disabled = false;
  } catch {
    updateStatus("Não foi possível carregar os dados.");
    updateDataOutput.textContent = "Erro ao atualizar os dados.";
    updateDataButton.disabled = true;
  }

  requestDataOutput.textContent = statusMessage;
}

// Exemplo sem destructuring
function render(photo) {
  titleElement.textContent = photo.title.toUpperCase();

  dateElement.textContent = formatDate(photo.date);

  descriptionElement.textContent = photo.explanation;

  imageElement.src = photo.url;
  imageElement.alt = photo.title;
}

/*
// Exemplo com destructuring

function render(photo) {
  const {
    title,
    date,
    explanation,
    url
  } = photo;

  titleElement.textContent = title.toUpperCase();

  dateElement.textContent = formatDate(date);

  descriptionElement.textContent = explanation;

  imageElement.src = url;
  imageElement.alt = title;
}
 */

function formatDate(date) {
  // Formatação de objeto Date para o padrão brasileiro (dd/mm/yyyy)
  return new Date(date).toLocaleDateString("pt-BR");
}

// Closure: Função que retorna outra função, mantendo o escopo da função pai
// A função createStatusManager cria um escopo privado para a variável lastStatus, que é acessível somente nesta função e na função retornada.
// Isso permite que a variável lastStatus seja atualizada e acessada de forma controlada, sem ser exposta ao escopo global.
function createStatusManager() {
  let lastStatus = "";

  return function (newStatus) {
    lastStatus = newStatus;

    console.log("Último status:", lastStatus);

    requestDataOutput.textContent = lastStatus;
  };
}

const updateStatus = createStatusManager();
updateStatus("Não foi possível carregar os dados.");

// =====================================================================
// SPREAD OPERATOR (...)
// =====================================================================

// Cria uma cópia do objeto retornado pela API e adiciona uma nova propriedade.
// O objeto original não é alterado.
function createFavoritePhoto(photo) {
  const favoritePhoto = {
    ...photo, // uso do spread
    favorite: true,
  };

  console.log("Foto original:", photo);

  console.log("Cópia da foto utilizando Spread:", favoritePhoto);

  return favoritePhoto;
}

// =====================================================================
// REST OPERATOR (...)
// =====================================================================

// O Rest reúne todas as propriedades restantes em um novo objeto.
function showPhotoSummary(photo) {
  const { title, date, ...otherInformation } = photo;

  // Separou as propriedades title e date do objeto photo
  console.log("showPhotoSummary Título:", title);
  console.log("showPhotoSummary Data:", date);

  // e o restante das propriedades foram agrupadas no objeto otherInformation.
  console.log("showPhotoSummary Demais informações:", otherInformation);
}

const photo = await nasaService.getPhotoOfTheDay();

// Exemplo de Spread
createFavoritePhoto(photo);

// Exemplos de Rest
showPhotoSummary(photo);
