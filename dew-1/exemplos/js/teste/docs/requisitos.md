# Requisitos do Projeto aprendaweb

## Visão geral
O projeto `aprendaweb` é uma plataforma web educacional em HTML, CSS e JavaScript puro para acadêmicos do primeiro semestre de engenharia de software.
O objetivo é ensinar JavaScript básico até conceitos avançados e legados, incentivando a aprendizagem ativa, gamificação e redução do uso de IA por meio de regras de uso, exercícios práticos e validações no navegador.

Autora: Sabrina B. Moreira
LinkedIn: https://www.linkedin.com/in/sabrinabm94/

Documentação auxiliar:
- `docs/epicos-e-historias.md` - épicos e histórias de usuário das implementações.

---

## Requisitos funcionais

1. Cadastro e autenticação
   - O acadêmico deve poder se cadastrar com os campos: email, nome completo, universidade, turma, semestre e idade.
   - O sistema deve validar aceitação de política de privacidade LGPD no cadastro.
   - O sistema deve validar aceitação de política de privacidade LGPD no cadastro.
   - O sistema deve registrar o timestamp do aceite e disponibilizá-lo no perfil do acadêmico.
   - O usuário deve poder fazer login com email e senha.
   - Deve existir recuperação de senha por email.

2. Perfis e papéis
   - Deve existir o papel `aluno` (acesso a exercícios, conteúdo, painel de desempenho).
   - Deve existir o papel `admin` (controle completo da plataforma, gerenciamento de turmas, alunos e conteúdo).
   - Apenas o administrador pode liberar a tela de parabenização final.

3. Painel do aluno
   - O aluno deve visualizar as 6 aulas do curso.
   - Cada aula deve conter descrição, tópicos, vídeo incorporado e exercícios interativos.
   - O aluno deve receber nota para cada exercício e o sistema deve calcular a média geral automaticamente.
   - Deve existir rastreamento de tentativas por módulo.
   - Deve ser possível liberar novas tentativas pelo admin.
   - Deve exibir pontos acumulados e progresso em tempo real.
   - A tela de parabenização final só deve aparecer quando todos os exercícios estiverem concluídos e o admin liberar.

4. Painel do administrador
   - Deve poder visualizar lista de acadêmicos com nome, email, turma, universidade, pontos e média.
   - Deve visualizar ranking dos melhores alunos por turma.
   - Deve poder configurar limite de tentativas de exercícios para todos os alunos.
   - Deve poder liberar ou bloquear a tela final de parabenização.
   - Deve poder desativar ou reativar o acesso de um acadêmico, bloqueando login e uso da plataforma.
      - Deve registrar logs de auditoria para ações administrativas relevantes (bloqueio/reativação), incluindo UID do admin e timestamp.
      - A lista de acadêmicos no painel admin deve oferecer filtros (nome, email, turma) e paginação para escalabilidade.
   - Deve poder editar títulos de módulo, subtítulos e pesos de cada módulo.
   - Deve poder exportar backup em JSON.
   - Deve poder exportar conteúdo em PDF.
   - Deve enviar aviso de novo módulo por email (registro de notificação no Firestore para futura integração).

5. Página da criadora
   - Deve existir uma página com informações da autora Sabrina B. Moreira.
   - Deve informar o LinkedIn https://www.linkedin.com/in/sabrinabm94/ e o email sabrina.moreira26@univille.br.
   - Deve orientar os acadêmicos a enviar dúvidas com turma e nome completo.

6. Conteúdo do curso
   - O conteúdo detalhado do curso será documentado em `docs/conteudo-curso.md`.
   - Deve ser produzido em PT-BR para os alunos.
   - Cada aula deve apresentar conceito, exercício prático, vídeo e explicação.
   - Os exercícios devem incluir quiz de seleção de uma resposta, múltiplas respostas, escrever código, completar código e texto.
   - O material deve abordar tecnologias antigas/legado para preparação de manutenção de sistemas.

7. Agendamento e datas
   - Cada aula deve ter uma data de agendamento de liberação.
   - Cada exercício da aula será liberado junto com a aula.
   - Cada exercício deve ter uma data máxima para execução.
   - Deve existir uma área de calendário gerada a partir dessas datas para os acadêmicos acompanharem.
   - Futuramente, deve estar preparado para exportar o calendário em formatos aceitos por Outlook, Gmail e outros.
   - Ao cadastrar uma turma, deve ser informado:
     - datas e horas de cada aula por semestre;
     - feriados;
     - períodos de recesso e férias.
   - Feriados, recesso e férias devem ser tratados por enumeração.

8. Alocação de notas e média
   - Cada exercício deve ter peso diferente.
   - As notas devem ser salvas e calculadas automaticamente pelo sistema.
   - A média geral deve ser exibida no painel do aluno e no admin.

9. Segurança e rastreamento
   - A plataforma deve impedir copiar/colar, seleção de texto, menu de contexto e atalhos de teclado comuns de captura.
   - Deve incluir técnicas anti-cópia e cola para desktop (mouse e teclado) e celular (touch screen).
   - Deve apresentar um bloqueador de tela quando o usuário alternar de janela ou perder foco.
   - Deve evitar bibliotecas externas sempre que possível, usando código feito à mão e funcionalidades modernas de JavaScript.
   - O sistema deve usar Firebase Auth e Firestore para controle de acesso e armazenamento.
   - Apenas o admin deve ter acesso a funcionalidades administrativas.

10. Backup e persistência
   - Deve haver exportação de backup JSON pelo admin.
   - Deve ser usada persistência local off-line do Firestore, quando disponível.

11. Experiência de aprendizagem
   - A plataforma deve ser gamificada e divertida, oferecendo sentimento de progressão e desafio.
   - Deve incluir conteúdos baseados em estudos de neurociência sobre aprendizado para jovens (memória ativa, revisão espaçada, prática deliberada, repetição intercalada).
   - Deve usar vídeos do YouTube embutidos para complementar o texto e os exercícios.
   - Deve impedir a cópia de conteúdos para minimizar uso de IA e forçar prática.

12. Responsividade
    - A interface deve ser responsiva para desktop e celular.

---

## Requisitos não funcionais

1. Usabilidade
   - Interface minimalista, atraente e jovem.
   - Navegação clara entre login, cadastro, painel aluno e painel admin.
   - Mensagens claras para erros, progresso e alertas.

2. Desempenho
   - Carregamento rápido em navegadores modernos.
   - Uso leve de recursos e renderização fluida.

3. Disponibilidade
   - O projeto deve ser funcional em um navegador padrão sem servidor próprio, com backend apenas no Firebase.
   - Deve suportar até 4 turmas de cerca de 50 alunos cada, totalizando 200 alunos ativos por semestre.
   - Deve ser otimizado para uso por 4 turmas de 50 alunos cada durante 2 semestres sem extrapolar a cota gratuita do Firebase.
   - Deve limitar gravações e leituras no Firebase usando caches locais e atualizações somente em eventos de envio, evitando logs de uso por segundo.
   - Deve estimar até 200 alunos com cerca de 5 leituras e 2 gravações por dia útil, mantendo-se abaixo de 20.000 gravações e 50.000 leituras diárias do plano gratuito.
   - Deve tratar o acesso dos acadêmicos com status ativo/bloqueado no perfil, permitindo que o admin desative contas rapidamente.

4. Segurança
   - Uso de autenticação segura via Firebase Auth.
   - Banco de dados Firestore configurado para armazenar dados do usuário como nome, email, turma, progresso e notas.
   - Respeito à LGPD no tratamento dos dados pessoais coletados.
   - A linguagem do código deve ser em inglês, com comentários em PT-BR.
   - As docs `.md` devem ser todas em PT-BR.
   - O conteúdo da plataforma para os acadêmicos deve ser em PT-BR.
   - Os campos de texto e exercícios devem oferecer opção de criação com IA, baseada no título e descrição do módulo e da aula.

5. Qualidade de código e arquitetura
   - O projeto deve aplicar princípios SOLID na estrutura do código e na organização dos módulos.
   - Cada módulo deve ter uma única responsabilidade clara e expor apenas as funções necessárias para outros módulos.
   - O sistema deve ser estendido principalmente por adição de novos serviços ou módulos, não por alteração de códigos existentes sempre que possível.

6. Compatibilidade
   - Deve funcionar em navegadores modernos de desktop e mobile.
   - Não depender de frameworks externos além do Firebase e jsPDF para PDF.

6. Manutenibilidade
   - Código organizado em HTML, CSS e JavaScript claros e comentados.
   - Configuração do Firebase separada em `firebase-config.js`.
   - Documentação de requisitos disponível em `docs/requisitos.md`.

7. Escalabilidade
   - Estrutura de dados pensada para evoluir com mais módulos e turmas.
   - Admin deve poder editar conteúdos e pesos sem alterar o código base.
   - Deve considerar uso de Firebase Realtime Database em modo teste inicialmente para prototipação.

8. Confiabilidade
   - Registro de progresso e tentativas deve ser persistido no Firestore.
   - Backup exportável para reduzir risco de perda de dados.
   - Deve haver logs simples de erros críticos, com pequeno volume de dados, para diagnosticar problemas sem onerar o Firebase.
   - Deve evitar gravações excessivas no Firebase, agrupando atualizações e usando cache local para dados temporários.
   - A configuração do Firebase deve ser salva de forma segura, lembrando que o `firebaseConfig` no frontend não é segredo de back-end, mas credenciais de administrador nunca devem ser publicadas.

9. Privacidade
   - Uso dos dados limitados para controle de acesso, histórico de exercícios e envio de avisos.
   - Consentimento explícito deve ser solicitado no cadastro.
   - Deve haver página de contato da criadora com nome, LinkedIn e email para dúvidas: sabrina.moreira26@univille.br, solicitando informar turma e nome completo.
