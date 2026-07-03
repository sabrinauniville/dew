# astronomy-picture-day

Este projeto foi criado para ensinar, de forma simples, como funciona uma aplicação Angular moderna usando o padrão standalone.

## Objetivo do projeto

A API NASA APOD (Astronomy Picture of the Day) fornece, diariamente, uma imagem ou vídeo inédito do universo, acompanhado de um breve texto explicativo escrito por um astrônomo profissional. O objetivo dessa aplicação é consumir esses dados e apresentar numa interface amigável ao usuário.

A ideia é mostrar, em um exemplo prático, como:

- criar uma aplicação Angular do zero;
- consumir uma API pública da NASA;
- separar a lógica em componentes, serviços e modelos;
- usar rotas e templates;
- guardar configurações sensíveis em variáveis de ambiente.

## Tecnologias do projeto

- Angular
- TypeScript
- HTML
- CSS
- RxJS
- HttpClient

## API usada

O projeto consome a API pública da NASA:

[https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY](https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY)

Para este exemplo, a chave de demonstração foi colocada em um arquivo de ambiente para mostrar como guardar valores sensíveis sem deixar a informação fixa no código.

## Como criar um arquivo .env compatível com esta aplicação

Crie um arquivo chamado .env na raiz do projeto com o seguinte formato:

```env
NASA_API_URL=https://api.nasa.gov/planetary/apod
NASA_API_KEY=sua-chave-publica-aqui
```

Depois, o projeto pode ler esses valores por meio do ambiente, mantendo a chave fora do código-fonte.

## Como conseguir uma chave pública da NASA

1. Acesse o site da NASA API.
2. Crie uma conta ou faça login.
3. Gere uma chave de API pública.
4. Cole a chave no arquivo .env.

> A chave pública é usada apenas para acessar a API em ambiente de desenvolvimento e demonstração.

## Estrutura principal

- package.json: define as dependências e os comandos principais do projeto.
- tsconfig.json: define as regras de compilação do TypeScript.
- angular.json: configura o build, o serve e as opções do Angular CLI.
- src/main.ts: ponto de entrada da aplicação Angular.
- src/environments: guarda as configurações de ambiente da aplicação.
- src/app/app.component.ts: componente principal que inicia a tela.
- src/app/app.routes.ts: define as rotas da aplicação.
- src/app/pages/home-page: página inicial com a busca da API da NASA.
- src/app/pages/about-page: página explicativa com conceitos básicos de Angular.
- src/app/components/concept-card: componente reutilizável para mostrar conceitos.
- src/app/services: arquivos com regras de negócio e comunicação com APIs.
- src/app/models: modelos de dados usados pela aplicação.

## Conceitos que o projeto exemplifica

- Componentes: blocos visuais da interface. Eles são como pequenos pedaços reutilizáveis da tela, como um botão, um card ou uma página inteira. Cada componente recebe dados, mostra informação e pode responder a ações do usuário.
- Templates: parte HTML que mostra os dados na tela. É a camada visual do componente, onde o conteúdo é apresentado de forma organizada e legível.
- Data binding: ligação entre dados e visualização. Permite que o valor de uma variável apareça na tela e que mudanças na interface atualizem automaticamente o estado da aplicação.
- Serviços: lugar para organizar lógica e comunicação com API. Quando a aplicação precisa buscar dados, salvar informações ou compartilhar regras, o serviço é o local ideal para isso.
- Injeção de dependência: forma de entregar serviços para os componentes. Em vez de criar tudo manualmente, o Angular fornece os objetos necessários automaticamente, deixando o código mais limpo e organizado.
- Rotas: navegação entre páginas. Elas permitem mudar a visualização da aplicação conforme o usuário acessa diferentes caminhos, como a página inicial e a página sobre.
- Standalone components: forma moderna de criar componentes sem um módulo principal. Isso simplifica a estrutura, reduz a quantidade de arquivos de configuração e deixa a aplicação mais direta para aprender.
- HttpClient: uso de requisições HTTP para buscar dados. Com ele, o Angular consegue conversar com APIs externas, como a NASA, e transformar a resposta em dados para a interface.

## Passo a passo para instalar Angular no Windows

### 1. Instalar o Node.js

Baixe e instale o Node.js no site oficial:

[https://nodejs.org/](https://nodejs.org/)

Depois de instalado, confirme com os comandos:

```bash
node -v
npm -v
```

### 2. Instalar a Angular CLI

No terminal, execute:

```bash
npm install -g @angular/cli
```

### 3. Criar um novo projeto

```bash
ng new meu-projeto
```

Escolha as opções de acordo com seu objetivo. Para este projeto, a estrutura foi criada com o padrão standalone.

### 4. Rodar a aplicação

Entre na pasta do projeto e execute:

```bash
cd meu-projeto
ng serve
```

Depois abra no navegador:

```text
http://localhost:4200
```

## Requisitos básicos

- Windows 10 ou superior
- Node.js 20 ou superior
- npm
- terminal como PowerShell, CMD ou Git Bash

## Como rodar este projeto localmente

No terminal, dentro da pasta do projeto:

```bash
npm install
npm start
```

## O que cada arquivo principal faz

### package.json

É o arquivo central do projeto Node.js. Ele guarda as dependências, os scripts de execução e as informações básicas do app.

### tsconfig.json

Controla como o TypeScript será compilado. Define regras de segurança, suporte a módulos e padrões de código para o projeto.

### angular.json

É o arquivo de configuração do Angular CLI. Nele ficam as definições de build, serve, saída dos arquivos e outras opções da aplicação.

### main.ts

É o ponto de entrada da aplicação. Aqui o Angular inicia o app e carrega o componente principal.

### environments

Guarda valores que mudam conforme o ambiente, como URLs de API e chaves. Isso ajuda a separar configuração de código.

### app.routes.ts

Define as rotas do projeto. Cada rota aponta para uma página ou componente específico.

## Estrutura de diretórios e por que foi organizada assim

A estrutura foi pensada para ficar simples e didática para quem está começando:

- src/app: contém a lógica principal da aplicação.
- src/app/pages: guarda as páginas do projeto.
- src/app/components: guarda partes reutilizáveis da interface.
- src/app/services: concentra a comunicação com APIs e regras compartilhadas.
- src/app/models: define a forma dos dados usados no app.

Essa divisão ajuda a encontrar arquivos com mais facilidade e a manter o projeto organizado conforme ele cresce.

## Observação importante

Este projeto usa uma chave pública da NASA para fins de demonstração. Em projetos reais, é melhor guardar a chave em variáveis de ambiente e não expor valores sensíveis no código.
