# Épicos e Histórias de Usuário do projeto aprendaweb

## Épico 1: Autenticação e Registro de Acadêmicos
Histórias de usuário:
- Como acadêmico, quero me cadastrar com email, senha e dados da turma, para acessar o conteúdo e ter progresso salvo.
- Como acadêmico, quero aceitar a política de privacidade LGPD no cadastro, para estar ciente do uso dos meus dados.
- Como usuário, quero fazer login com email e senha, para entrar no painel com meu progresso.
- Como usuário, quero recuperar minha senha por email, para voltar a acessar caso esqueça.
- Como administrador, quero desbloquear ou bloquear o acesso de um aluno, para controlar quem pode usar a plataforma.
- Como usuário, quero alternar entre tema claro e escuro no cabeçalho, com tema escuro padrão e preferência persistida, para personalizar a leitura em todas as páginas.
- Como acadêmico, quero ver a data de aceite da política de privacidade no meu perfil, para ter confirmação de consentimento.
- Como administrador, quero registrar logs das ações de bloqueio/reativação contendo o admin responsável e timestamp, para auditoria.
- Como administrador, quero filtrar e paginar a lista de acadêmicos, para gerenciar turmas grandes com eficiência.

## Épico 2: Painel do Aluno e Progresso
Histórias de usuário:
- Como acadêmico, quero ver a lista de aulas disponíveis, para saber o que estudar.
- Como acadêmico, quero ver meu progresso, pontos e média calculada automaticamente, para acompanhar meu desempenho.
- Como acadêmico, quero abrir um módulo e ver vídeo, descrição e exercícios, para aprender de forma guiada.
- Como acadêmico, quero que o sistema registre tentativas e bloqueie envio após limite, para controlar o ritmo de estudo.
- Como acadêmico, quero ver a tela de parabenização só quando todas as aulas estiverem concluídas e o admin liberar, para ter um objetivo claro.

## Épico 3: Painel Administrativo e Gestão de Turmas
Histórias de usuário:
- Como administrador, quero ver a lista de acadêmicos com informações chave, para entender a turma.
- Como administrador, quero ver o ranking dos melhores alunos, para incentivar a competição saudável.
- Como administrador, quero alterar limite de tentativas globais, para ajustar o nível de desafio.
- Como administrador, quero alterar títulos, subtítulos e pesos dos módulos, para manter o curso atualizado.
- Como administrador, quero exportar backup em JSON e conteúdo em PDF, para preservar dados e compartilhar material.
- Como administrador, quero registrar avisos de novos módulos no Firestore, para planejar futura integração de envio de email.

## Épico 4: Conteúdo do Curso e Exercícios
Histórias de usuário:
- Como acadêmico, quero acessar aulas que combinam vídeo, tópicos e exercícios, para aprender pelo exemplo.
- Como acadêmico, quero responder exercícios de múltipla escolha, checkbox e texto, para praticar diferentes formatos.
- Como acadêmico, quero ter exercícios de código que aceitem respostas textuais, para reforçar lógica e familiaridade com sintaxe.
- Como administrador, quero que o conteúdo fique salvo no Firestore, para poder atualizar sem redeploy.
- Como desenvolvedor, quero que os dados de módulo sejam carregados de forma modular, para manter o código organizado.

## Épico 5: Segurança, Anti-cópia e LGPD
Histórias de usuário:
- Como plataforma, quero bloquear copiar/colar, seleção e menu de contexto, para reduzir uso indevido do material.
- Como plataforma, quero exibir bloqueador de tela ao perder foco, para incentivar atenção e reduzir fraudes.
- Como desenvolvedor, quero armazenar apenas dados mínimos do aluno, para atender aos princípios da LGPD.
- Como plataforma, quero validar papéis e status do usuário no login, para impedir acesso indevido de alunos bloqueados.

## Épico 6: Backup, Persistência e Offline
Histórias de usuário:
- Como administrador, quero exportar backup JSON do banco, para guardar cópia externa dos registros.
- Como plataforma, quero usar persistência local do Firestore quando disponível, para melhorar experiência off-line.
- Como administrador, quero que o conteúdo e configurações sejam gravados no Firestore, para garantir recuperação e atualização dinâmica.

## Épico 7: Arquitetura SOLID e Manutenção do Código
Histórias de usuário:
- Como desenvolvedor, quero que cada módulo tenha responsabilidade única, para facilitar manutenção e compreensão.
- Como desenvolvedor, quero que o sistema possa ser estendido sem alterar módulos existentes, para adicionar novas features sem risco.
- Como desenvolvedor, quero que as camadas de alto nível dependam de abstrações, para reduzir acoplamento e testar mais facilmente.
- Como desenvolvedor, quero que a interface de cada módulo seja enxuta, para não expor detalhes desnecessários entre componentes.

## Épico 8: Calendário, Datas e Planejamento de Aulas
Histórias de usuário:
- Como acadêmico, quero ver as datas de liberação de cada aula e o prazo de execução, para planejar meu estudo.
- Como administrador, quero registrar feriados e períodos de recesso, para que o calendário reflita o semestre real.
- Como desenvolvedor, quero que a estrutura de datas suporte enumerações de feriados e recesso, para evitar tratamentos ad hoc.
- Como futuro usuário, quero exportar o calendário para Outlook/Gmail, para integrar meus compromissos de estudo.

## Épico 9: Responsividade e Experiência do Usuário
Histórias de usuário:
- Como acadêmico, quero usar a plataforma no celular e no desktop, para poder estudar em qualquer lugar.
- Como acadêmico, quero ter mensagens de erro claras e feedback sobre progresso, para saber o que fazer a seguir.
- Como acadêmico, quero que a interface seja leve e rápida, para não desperdiçar meu tempo com carregamento.
- Como desenvolvedor, quero manter o frontend em JavaScript puro, para reduzir dependências e controlar o comportamento do app.
