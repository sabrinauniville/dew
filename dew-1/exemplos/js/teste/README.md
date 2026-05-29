# aprendaweb

Projeto web educativo em HTML, CSS e JavaScript puro para acadêmicos de engenharia de software.

## Estrutura
- `index.html` - página de login/cadastro e painel do aluno
- `admin.html` - painel de administração para gerenciar turmas, exercícios e liberar finalização
- `styles.css` - estilos responsivos e minimalistas em PT-BR
- `main.js` - script de inicialização que carrega os recursos de autenticação, aluno e admin
- `features/` - código separado por feature: `auth`, `student`, `admin`
- `services/firebase-service.js` - conexão com Firebase e inicialização de dados
- `components/ui.js` - renderização de interface e anti-cópia
- `data/data.js` - conteúdo dos módulos e configurações iniciais
- `utils/utils.js` - utilitários de notas, sanitização e cálculo de média
- `firebase-config.js` - arquivo de configuração do Firebase- O projeto adota princípios SOLID para facilitar extensão, manutenção e baixo acoplamento entre os módulos.
- Regra do projeto: a autora deve ser referenciada como Sabrina B. Moreira em toda comunicação e documentação.
## Uso
1. Configure um projeto no Firebase usando o plano gratuito.
2. Ative Authentication (Email/Senha) e Cloud Firestore.
3. Substitua os valores em `firebase-config.js` pelo seu `apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId` e `appId`.
4. Abra `index.html` no navegador para testar o fluxo de registro e estudo.
5. Abra `admin.html` para acessar o painel administrativo.

## Setup inicial e execução local

**Pré-requisitos**
- Node.js (preferível, para usar o comando `serve`)
- VS Code com a extensão Live Server (segunda opção)

**Opções para rodar localmente**

1) Usando `serve` (Node)
- No terminal, a partir da pasta [js/teste](js/teste):
```
# navegue até a pasta js/teste
npx serve -s . -l 5500
# abra http://localhost:5500
```

2) Usando Live Server (VS Code)
- Abra a pasta [js/teste](js/teste) no VS Code e clique em "Go Live" ou use "Open with Live Server".

3) Abrir arquivos diretamente
- É possível abrir `index.html` direto no navegador, mas algumas funcionalidades (ex.: Firebase) podem exigir um servidor local.

**Outras informações importantes**
- Abra [informacoes-importantes.html](informacoes-importantes.html) para consultar calendário acadêmico, contatos da Univille, orientações sobre ABNT, segunda chamada, estágio, faltas, mérito estudantil, horas complementares e Engetec.

**Configurar o Firebase (resumo)**
- Crie um projeto no Firebase, ative Authentication (Email/Senha) e Cloud Firestore.
- Substitua os valores em [firebase-config.js](firebase-config.js) pelo seu `apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId` e `appId`.
- Para testes avançados, considere usar o Firebase Emulator Suite.

**Testes rápidos**
- Abra [index.html](index.html) e registre um usuário.
- Faça login e verifique o painel do aluno.
- Abra [admin.html](admin.html) e verifique as funcionalidades administrativas.

## Recursos implementados
- Cadastro com email, nome completo, universidade, turma, semestre e idade.
- Login e recuperação de senha por email.
- Painel de aluno com lista de módulos e acompanhamento de progresso.
- Painel de administrador com ranking, edição de módulos e exportação de backup.
- Sistema de pontuação e cálculo automático de média.
- Tela de parabenização liberada manualmente pelo administrador.
- Bloqueio de cópia, colar e impressão de tela com camada de proteção.
- Exportação de conteúdo em JSON e PDF para backup.
- Estrutura pensada para 6 aulas de 1h30 com exercícios práticos.

## Observações
- A funcionalidade de envio de email está registrada como notificação no Firestore para futura integração com serviços externos.
- Para criar um administrador, registre uma conta normal e depois edite o documento do usuário no Firestore, definindo `role: "admin"`.
- O backup pode ser feito com a exportação JSON do painel admin e pelos recursos de persistência do navegador.

## LGPD
Os dados pessoais são usados apenas para controle de acesso, pontuação e registro de progresso. A interface já informa essa política de uso.
