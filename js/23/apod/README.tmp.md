# astronomy-picture-day - Angular 19 APOD

Aplicação Angular 19 que consome a API pública NASA APOD para exibir a imagem ou vídeo do dia.
Inclui estrutura de páginas, serviços e variáveis de ambiente para chaves sensíveis.

## Tecnologias e características

- Angular 19
- TypeScript
- HTML
- CSS
- RxJS
- HttpClient
- Rotas e componentes organizados
- Configuração de ambiente para chaves

## Setup

Requisitos:
- Node.js 20+
- npm

Como rodar:

```bash
cd js/23/apod
npm install
npm start
```

Build de produção:

```bash
npm run build
```

Antes de rodar, verifique os arquivos:
- `src/environments/environment.ts`
- `src/environments/environment.prod.ts`

e adicione sua chave da NASA em `nasaApiKey`.

## Autor

Sabrina B. Moreira

Email: sabrina.moreira26@univille.br

## Licença

MIT License
