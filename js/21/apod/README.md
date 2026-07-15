# APOD - NASA Astronomy Picture of the Day (Vanilla JS)

Este projeto exibe a imagem ou vídeo diário da NASA APOD usando HTML, CSS e JavaScript moderno.
A aplicação consome a API pública da NASA para apresentar título, data, descrição e mídia do dia com uma estrutura simples e didática.

## Tecnologias utilizadas e características

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- Projeto estático, sem build
- Arquivos separados por responsabilidade

## Setup

Requisitos:
- Navegador moderno
- Node.js e npm (opcional, para servidor local)

Como rodar:

```bash
cd js/21/apod
# Abra index.html diretamente no navegador ou use um servidor local
npx http-server
```

Abra no navegador:

```text
http://localhost:8080
```

Antes de rodar, verifique `environment.js` e adicione sua chave da NASA.

## Autor

Sabrina B. Moreira

Email: sabrina.moreira26@univille.br

## Licença

MIT License


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
