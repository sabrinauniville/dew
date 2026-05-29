# Arquitetura do Projeto aprendaweb

## Visão geral
Este documento descreve a arquitetura da plataforma `aprendaweb`, uma aplicação web educacional em HTML, CSS e JavaScript puro com backend no Firebase.
O objetivo é oferecer um ambiente seguro, responsivo e escalável para até 4 turmas de 50 alunos por semestre, com foco em baixa utilização da cota gratuita do Firebase.

## Princípios de arquitetura
- Arquitetura serverless leve: frontend estático rodando diretamente no navegador e backend fornecido pelo Firebase.
- Máxima simplicidade: código feito manualmente, evitando dependências de bibliotecas UI externas como Bootstrap.
- Privacidade e LGPD: coleta mínima de dados pessoais, uso explícito de consentimento e página de contato com informações da autora.
- UX gamificada: progressão visível, pontos, ranking e conclusão manual pela administração.
- Confiabilidade com custo reduzido: otimizar leituras/gravações, uso de cache local e logs críticos de baixo volume.
- Design orientado a SOLID: separação de responsabilidades, baixo acoplamento entre módulos, e facilidade para estender funcionalidades sem alterar módulos existentes.

## Componentes

### Frontend
- `index.html` e `admin.html`: páginas principais do usuário aluno e do administrador.
- `styles.css`: estilo responsivo e minimalista com efeitos modernos.
- `main.js`: inicializador do frontend que orquestra autenticação, controle de estudo e painel admin.
- `features/`: código organizado por feature (`auth`, `student`, `admin`).
- `services/firebase-service.js`: camada de dados e inicialização do Firestore.
- `components/ui.js`: renderização da interface, componentes de módulo e anti-cópia.
- `data/`: conteúdo do curso e configurações iniciais.
- `utils/utils.js`: utilitários de nota, normalização de texto e data.
- `firebase-config.js`: configuração de conexão com Firebase separada para facilitar implantação.

### Backend / Firebase
- Firebase Authentication:
  - autenticação por email e senha.
  - perfil básico com papel `student` ou `admin`.
  - controle de contas ativas/bloqueadas.
- Firebase Firestore:
  - armazenamento de usuários, progresso, configurações de plataforma, módulos e notificações.
  - uso principal para dados estruturados de perfil e progresso.
- Firebase Realtime Database (opcional para prototipação):
  - pode ser usado em modo teste inicialmente para experimentos rápidos.
  - caso usado, manter apenas dados leves e temporários.

## Modelagem de dados

### Usuário (`users/{uid}`)
- `name`: string
- `email`: string
- `role`: `student` ou `admin`
- `class`: turma
- `semester`: semestre
- `university`: universidade
- `age`: idade
- `status`: `active` ou `blocked`
- `points`: número inteiro
- `totalAttempts`: número inteiro
- `progress`: objeto de módulos concluídos
- `createdAt`: timestamp
- `updatedAt`: timestamp
- `attemptLimit`: número de tentativas permitido

### Progresso do módulo
- `progress[moduleId]`:
  - `attempts`: número de tentativas usadas
  - `score`: pontuação acumulada
  - `weight`: peso total do módulo
  - `completed`: boolean
  - `updatedAt`: timestamp

### Plataforma (`platform/settings`)
- `attemptLimit`: limite global de tentativas
- `releaseFinal`: flag de liberação da tela de parabenização
- `weights`: pesos dos módulos
- `calendarConfig`: configurações de calendário e datas de liberação

### Conteúdo do curso (`platform/modules`)
- `modules`: lista de módulos com:
  - `id`, `title`, `subtitle`, `description`
  - `video`
  - `topics`
  - `releaseDate`
  - `deadlineDate`
  - `exercises`

### Notificações (`platform/notifications`)
- `lastEmailNotice`: mensagem de aviso salva
- `updatedAt`: timestamp

### Logs simples de erros críticos (`logs/errors`)
- `timestamp`
- `level`: `critical`
- `message`
- `context`: objeto leve

## Fluxo de autenticação e perfil
1. Usuário cadastra-se em `index.html` com dados completos e aceita política de privacidade.
2. O usuário é criado no Firebase Auth e o perfil é persistido no Firestore.
3. Ao fazer login, o sistema verifica o papel e o status do usuário.
4. Se o usuário estiver bloqueado, o acesso é negado e a mensagem indica que o admin deve reativar a conta.
5. Administrador tem painel separado em `admin.html` e só ele pode bloquear/desbloquear contas, editar módulos, liberar final e exportar dados.

## Controle de acesso e segurança
- Validação de papel no frontend e na estrutura de dados do Firestore.
- Acesso administrativo deve ser conferido pelo campo `role` no documento do usuário.
- Bloqueio de aluno por `status: blocked` impede o login e o uso de funcionalidades de aluno.
- Proteções anti-cópia/cola no frontend:
  - bloqueio de atalhos Ctrl+C/Ctrl+V/Ctrl+S/F12
  - desabilitar seleção de texto e menu de contexto
  - tela de bloqueio se o usuário perder foco ou alternar de aba
- Uso mínimo de chamadas Firebase para reduzir custo:
  - cache local de progressos e configuração
  - atualizações somente em eventos explícitos de envio

## Gestão de calendário e agendamento
- Cada módulo contém data de liberação e data máxima de execução.
- Painel do aluno exibe um calendário com as datas de aulas, feriados e períodos de recesso.
- O admin fornece:
  - datas e horários das aulas por semestre
  - feriados
  - períodos de recesso e férias
- Estrutura de datas tratada como enumeração para períodos especiais.
- Próximo passo: exportação de calendário para Outlook/Gmail.

## Consumo estimado do Firebase
- Público máximo: 200 alunos (4 turmas de 50) por semestre.
- Estimativa de leitura/gravação:
  - 5 leituras por aluno por dia útil (dashboard, módulos, progresso, configuração)
  - 2 gravações por aluno por dia útil (envio de exercício, atualização de progresso)
- Total estimado:
  - até 1.000 leituras/dia por turma, 4.000 leituras/dia no total
  - até 400 gravações/dia no total
- Observação: o plano gratuito do Firebase suporta milhares de leituras e gravações, mas o projeto deve evitar atualizações constantes e logs excessivos.

## Design de implementação do frontend
- Single-page simplified flows dentro de duas páginas principais.
- Uso de JavaScript puro para:
  - renderizar dashboards e listas de módulos
  - construir formulários dinâmicos de exercícios
  - gerenciar estados de usuário e cache local
- Organização em módulos SOLID:
  - Single Responsibility: cada arquivo cuida de uma responsabilidade clara (autenticação, aluno, admin, UI, dados, serviços).
  - Open/Closed: novas features e conteúdo podem ser adicionados sem alterar módulos existentes.
  - Liskov Substitution: componentes e serviços mantêm interfaces consistentes para troca segura.
  - Interface Segregation: as funções e módulos expõem apenas o que o consumidor realmente precisa.
  - Dependency Inversion: camadas de alto nível dependem de abstrações `services/firebase-service.js`, não de detalhes de implementação.
- Comentários do código em PT-BR e variáveis/strings de código em inglês.
- Conteúdo educativo e textos para alunos em PT-BR.
- Documentação `.md` em PT-BR.

## Escalabilidade e manutenção
- Dados de módulo e configurações são gravados no Firestore para permitir mudanças sem deploy.
- Admin pode editar módulos, pesos e liberar final sem alterar código.
- Estrutura permite adicionar mais módulos ou turmas sem reestruturação de frontend.
- Logs críticos simples possibilitam diagnóstico sem sobrecarga.

## Riscos e mitigação
- Risco: exposição de dados via `firebaseConfig` no frontend.
  - Mitigação: usar regras de segurança no Firebase e não armazenar chaves secretas no cliente.
- Risco: uso excessivo da cota do Firebase.
  - Mitigação: reduzir leituras redundantes, adicionar cache e agrupar gravações.
- Risco: usuários bloqueados ainda acessarem conteúdo.
  - Mitigação: verificar `status` sempre no login e limitar rotas/ações com base no perfil.

## Roadmap de evolução
1. Implementar o controle de contas ativas/bloqueadas no admin.
2. Adicionar área de calendário com exportação futura para Outlook/Gmail.
3. Integrar envio real de email via serviço externo ou Cloud Function.
4. Refinar logs críticos e monitoramento leve.
5. Completar `docs/conteudo-curso.md` com conteúdo de cada aula.

## Conclusão
A arquitetura proposta equilibra simplicidade, segurança, responsividade e uso eficiente do Firebase para um público universitário de até 200 alunos por semestre.
O foco principal é garantir o funcionamento confiável em ambiente gratuito, respeitando LGPD e mantendo o desenvolvimento manual e controlado.
