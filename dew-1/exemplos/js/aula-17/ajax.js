/* Solicitação GET XMLHttpRequest */
if (window.XMLHttpRequest) {
  /* Instância do objeto */
  let httpRequest = new XMLHttpRequest();

  /* Abertura de conexão com servidor para requisição assincrona */
  httpRequest.open("GET", "http:teste.com/meuservico", true);

  /* Envio da requisição Get ao servidor */
  httpRequest.send("");
}

/* Solicitação POST XMLHttpRequest */
if (window.XMLHttpRequest) {
  /* Instância do objeto */
  let httpRequest = new XMLHttpRequest();

  /* Abertura de conexão com servidor para requisição assincrona */
  httpRequest.open("POST", "http:teste.com/meuservico", true);

  /* Indicação do tipo de dado que será enviado */
  httpRequest.setRequestHeader(
    "Content-type",
    "application/x-www-form-urlencoded",
  );

  /* Envio da requisição Post ao servidor com seus parâmetros */
  httpRequest.send("id=12345");
}

/* Tratamento de resposta XMLHttpRequest */
httpRequest.onreadystatechange = function () {
  if (httpRequest.readyState === 4 && httpRequest.status === 200) {
    let response = httpRequest.responseText;
    console.log("O retorno do servidor foi: ", response);
  }
};

/* Solicitação GET - Fetch */
async function buscarUsuario() {
  const resposta = await fetch("https://jsonplaceholder.typicode.com/users/1");

  const usuario = await resposta.json();

  document.getElementById("nome").textContent = usuario.name;
}

const jsonData = '[{"name": "Sabrina","lastname": "Moreira"}]';

const jsonDataParsed = JSON.parse(jsonData);

let name = jsonDataParsed[0].name;
let lastname = jsonDataParsed[0].lastname;
console.log("O nome é: " + name + " " + lastname);
