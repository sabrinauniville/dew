# Astronomy Picture of the Day (NASA)

Este projeto foi desenvolvido para ensinar, de forma prática e didática, os principais conceitos do desenvolvimento Web utilizando **HTML**, **CSS** e **JavaScript moderno (ES6+)**, consumindo uma API pública da NASA.

A aplicação consulta diariamente a API **Astronomy Picture of the Day (APOD)** e apresenta a imagem (ou vídeo) do dia juntamente com seu título, data e descrição.

Todo o projeto foi organizado de forma simples para facilitar o aprendizado de quem está iniciando no desenvolvimento Web, mostrando como separar responsabilidades entre os arquivos da aplicação.

---

# Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (ES6+)
* Fetch API
* API pública da NASA

---

# API utilizada

A aplicação consome a API pública **Astronomy Picture of the Day (APOD)** disponibilizada pela NASA.

Documentação oficial:

<https://api.nasa.gov/>

Endpoint utilizado:

```text
https://api.nasa.gov/planetary/apod
```

A resposta da API contém diversas informações, entre elas:

* título da imagem;
* data da publicação;
* descrição;
* URL da imagem;
* tipo da mídia.

---

# Estrutura do projeto

```text
js/
└── aula-21/
    │
    ├── app.js
    ├── environment.js
    ├── service.js
    ├── style.css
    ├── index.html
    └── README.md
```

---

# Explicação dos arquivos

## index.html

É a página principal da aplicação.

Nele é definida toda a estrutura HTML que será apresentada ao usuário.

Também realiza o carregamento dos arquivos JavaScript responsáveis pelo funcionamento da aplicação.

---

## style.css

Arquivo responsável pela aparência da aplicação.

Nele são definidos:

* cores;
* fontes;
* espaçamentos;
* posicionamento dos elementos;
* layout da página.

---

## app.js

É o arquivo principal da aplicação.

Suas responsabilidades são:

* iniciar a aplicação;
* solicitar os dados da API;
* atualizar a interface;
* tratar possíveis erros;
* manipular os elementos da página.

---

## service.js

Centraliza toda a comunicação com a API da NASA.

Sempre que a aplicação precisar consultar a API, essa responsabilidade ficará concentrada neste arquivo.

Essa separação torna o código mais organizado e facilita futuras manutenções.

---

## environment.js

Arquivo utilizado para centralizar as configurações da aplicação.

Neste projeto ele armazena:

* URL da API;
* chave pública da NASA.

Exemplo:

```javascript
const environment = {

    nasaApiUrl: "https://api.nasa.gov/planetary/apod",

    nasaApiKey: "SUA_CHAVE_DA_NASA"

};
```

Caso futuramente seja necessário alterar a URL da API ou utilizar outra chave, basta modificar este arquivo.

---

## README.md

Arquivo responsável pela documentação do projeto.

Contém informações sobre instalação, configuração, estrutura e funcionamento da aplicação.

---

# Configurando a aplicação

Antes de executar o projeto, abra o arquivo:

```text
environment.js
```

Configure a URL da API e sua chave pública da NASA.

Exemplo:

```javascript
const environment = {

    nasaApiUrl: "https://api.nasa.gov/planetary/apod",

    nasaApiKey: "SUA_CHAVE_DA_NASA"

};
```

---

# Como obter uma chave da NASA

A NASA disponibiliza gratuitamente uma chave de acesso para utilização de suas APIs.

1. Acesse:

```text
https://api.nasa.gov/
```

1. Faça um cadastro gratuito.

2. Gere sua chave de acesso.

3. Copie a chave para o arquivo:

```text
environment.js
```

---

# Como executar o projeto

Como este projeto utiliza apenas HTML, CSS e JavaScript, **não** é necessário instalar bibliotecas ou executar comandos de compilação.

Basta abrir o arquivo:

```text
index.html
```

em um navegador moderno.

## Utilizando o Visual Studio Code

Para facilitar o desenvolvimento, recomenda-se utilizar a extensão **Live Server**.

Após instalar a extensão:

1. Abra a pasta do projeto no Visual Studio Code.
2. Clique com o botão direito sobre o arquivo **index.html**.
3. Selecione **Open with Live Server**.

O navegador será aberto automaticamente exibindo a aplicação.

---

# Como funciona a aplicação

Quando a página é carregada, o JavaScript inicia automaticamente a execução da aplicação.

O arquivo **app.js** solicita ao **service.js** os dados da API.

O **service.js** utiliza a **Fetch API** para realizar uma requisição HTTP para a NASA.

Após receber a resposta da API, os dados são convertidos para JSON e retornam ao arquivo principal.

Por fim, a interface é atualizada dinamicamente com as informações recebidas.

O fluxo da aplicação pode ser representado da seguinte forma:

```text
Usuário

        ↓

index.html

        ↓

app.js

        ↓

service.js

        ↓

Fetch API

        ↓

NASA APOD API

        ↓

Resposta JSON

        ↓

Atualização da Interface
```

---

# Organização da aplicação

A aplicação foi dividida em arquivos diferentes para que cada um tenha apenas uma responsabilidade.

| Arquivo        | Responsabilidade                                 |
| -------------- | ------------------------------------------------ |
| index.html     | Estrutura da página                              |
| style.css      | Estilos da aplicação                             |
| app.js         | Controle da aplicação e atualização da interface |
| service.js     | Comunicação com a API                            |
| environment.js | Configurações da aplicação                       |
| README.md      | Documentação                                     |

Essa divisão facilita a leitura do código, a manutenção e o crescimento do projeto.

---

# Requisitos

Para executar este projeto é necessário possuir:

* Navegador moderno (Google Chrome, Microsoft Edge ou Mozilla Firefox);
* Visual Studio Code (recomendado);
* Extensão Live Server (recomendada);
* Conexão com a Internet para acessar a API da NASA.

---

# Licença

Este projeto foi desenvolvido exclusivamente para fins educacionais.
