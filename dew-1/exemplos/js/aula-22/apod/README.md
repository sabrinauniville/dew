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

## Validação dos conceitos aplicados

- Fundamentos: O que é uma aplicação Web um software acessado pelo navegador, com interface e regras de negócio.
- Fundamentos: O que é um Framework um conjunto de ferramentas que acelera o desenvolvimento.
- Fundamentos: O que é Angular um framework para construir aplicações web modernas com TypeScript.
- Fundamentos: SPA a aplicação é carregada uma vez e troca conteúdo sem recarregar a página inteira.
- Fundamentos: Características de uma SPA navegação rápida, interface dinâmica e melhor experiência do usuário.
- Fundamentos: TypeScript linguagem usada para escrever o projeto com tipagem e segurança.
- Fundamentos: Interfaces (TypeScript) a resposta da API é tipada com uma interface em src/app/models/apod.model.ts.
- Fundamentos: JSON a comunicação com a API usa dados no formato JSON.
- Fundamentos: Angular CLI o projeto foi criado e gerido com comandos do Angular CLI.
- Estrutura do Projeto: Estrutura de pastas do Angular a aplicação segue a estrutura padrão de src, app, components, pages, services e models.
- Estrutura do Projeto: src pasta principal com o código-fonte da aplicação.
- Estrutura do Projeto: app pasta com componentes, serviços, páginas e modelos do projeto.
- Estrutura do Projeto: assets a pasta src/assets foi criada para arquivos estáticos como imagens e ícones.
- Estrutura do Projeto: environments o projeto usa o arquivo de ambiente para guardar a URL e a chave da API.
- Estrutura do Projeto: angular.json arquivo de configuração do build e do CLI.
- Estrutura do Projeto: main.ts ponto de entrada que inicia a aplicação Angular.
- Componentes: Componentes a interface é dividida em componentes reutilizáveis.
- Componentes: Componentes reutilizáveis o card de conceitos é usado em várias partes da interface.
- Componentes: Encapsulamento cada componente controla sua própria lógica e estilo.
- Componentes: Templates cada componente possui um template para renderizar a tela.
- Componentes: Selector os componentes são expostos com seletores como app-home-page e app-concept-card.
- Componentes: Standalone Components o projeto usa o modelo moderno sem NgModule principal.
- Componentes: Componentes Pai e Filho a página sobre usa um componente filho com dados e eventos.
- Componentes: @Input o componente de card recebe título e descrição por entrada.
- Componentes: @Output o componente chip emite um evento ao ser clicado.
- Componentes: Decorators o projeto usa decorators como @Component e @Injectable.
- Componentes: NgModule (conceito atual) no Angular atual, o uso de standalone components substitui o NgModule tradicional para este projeto.
- Componentes: Ciclo de Vida o componente inicial usa ngOnInit para carregar a imagem da API.
- Templates: Interpolação os dados são exibidos com {{ ... }} no template.
- Templates: Property Binding a imagem usa [src] e [alt] para vincular valores.
- Templates: Event Binding os componentes reagem a cliques e eventos do formulário.
- Templates: Two-Way Data Binding o formulário orientado a template usa [(ngModel)] para sincronizar dados.
- Templates: Diretivas o projeto usa diretivas como *ngIf e agora @if/@for no template moderno.
- Templates: @if o template usa a nova sintaxe @if para controlar a renderização.
- Templates: @for a lista de destaques é renderizada com @for.
- Pipes: Pipes o template usa pipes para formatar texto e datas.
- Pipes: Pipes mais utilizados date e uppercase já aparecem no projeto.
- Pipes: Pipe personalizado foi criado o pipe shortenText para resumir descrições.
- Serviços: Services o projeto centraliza a busca da API no NasaService.
- Serviços: Injeção de Dependência o Angular injeta o serviço automaticamente no componente.
- Serviços: HttpClient o projeto consome a API NASA com HttpClient.
- Serviços: Consumo de API a aplicação busca os dados do APOD e mostra na interface.
- Programação Assíncrona: Promise o fluxo assíncrono é tratado de forma simples com observables e subscriptions.
- Programação Assíncrona: async/await o projeto usa o padrão reativo, que é a forma mais natural no Angular moderno.
- Programação Assíncrona: Observable o método getPhotoOfTheDay() retorna um Observable.
- Programação Assíncrona: Diferença Promise × Observable observables suportam múltiplos valores e reatividade contínua.
- Programação Assíncrona: Por que Angular utiliza Observable porque o framework trabalha bem com streams de dados e eventos assíncronos.
- Formulários: Forms o projeto possui exemplos de formulários no componente sobre.
- Formulários: Template-Driven Forms o formulário orientado a template usa ngModel e ngForm.
- Formulários: Reactive Forms o formulário reativo usa FormGroup e FormControl com validação.
- Formulários: Validators os campos são validados com Validators.required e Validators.minLength.
- Navegação: Router o projeto usa o Angular Router para navegar entre páginas.
- Navegação: Navegação entre componentes as rotas levam para Home e Sobre.
- Estado: Signals o estado da mensagem e do conceito selecionado é controlado com signals.

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
