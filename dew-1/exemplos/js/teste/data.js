export const moduleDefinitions = [
  {
    id: 'mod1',
    title: 'Introdução ao JavaScript e histórico',
    subtitle: 'Por que JS é essencial e como ele surgiu',
    description: 'Entenda o surgimento da linguagem e como ela se conecta com sistemas legados.',
    topics: ['História do JavaScript', 'Legado', 'Domínio do navegador'],
    lessons: [
      {
        id: 'lesson-1-1',
        title: 'Origem e evolução do JavaScript',
        description: 'Conheça a história, o papel do ECMAScript e por que o legado ainda importa.',
        releaseDate: '2026-06-01',
        deadlineDate: '2026-06-08',
        video: 'https://www.youtube.com/embed/PkZNo7MFNFg',
        exercises: [
          {
            id: 'ex1',
            type: 'radio',
            question: 'JavaScript é usado principalmente para:',
            options: ['Criar o estilo visual de uma página', 'Controlar a lógica e interação da página', 'Gerenciar o banco de dados do servidor'],
            answer: 1,
            weight: 10
          },
          {
            id: 'ex2',
            type: 'text',
            question: 'Cite dois motivos para conhecer tecnologias antigas como jQuery ou DOM padrão.',
            placeholder: 'Resposta em poucas linhas...',
            answer: ['compatibilidade', 'manutenção', 'legado', 'trabalho em equipe'],
            weight: 15
          }
        ]
      }
    ]
  },
  {
    id: 'mod2',
    title: 'Variáveis, tipos e controle de fluxo',
    subtitle: 'Como o JS organiza dados e decisões',
    description: 'Aprenda a manipular valores e decidir caminhos no código.',
    topics: ['let/const/var', 'Tipos primitivos', 'if/else', 'loops'],
    lessons: [
      {
        id: 'lesson-2-1',
        title: 'Variáveis e controle de fluxo',
        description: 'Entenda como dados são armazenados, comparados e repetidos no JavaScript.',
        releaseDate: '2026-06-09',
        deadlineDate: '2026-06-16',
        video: 'https://www.youtube.com/embed/NCwa_xi0Uuc',
        exercises: [
          {
            id: 'ex1',
            type: 'checkbox',
            question: 'Selecione as opções verdadeiras sobre variáveis em JavaScript.',
            options: ['const não pode ser reatribuída', 'var tem escopo de bloco', 'let evita hoisting prejudicial', 'undefined é atribuído automaticamente a variáveis não inicializadas'],
            answer: [0, 2, 3],
            weight: 15
          },
          {
            id: 'ex2',
            type: 'code',
            question: 'Qual será o valor impresso no console?\nlet a = 5; a += 3; console.log(a);',
            placeholder: 'Digite o valor correto...',
            answer: '8',
            weight: 10
          }
        ]
      }
    ]
  },
  {
    id: 'mod3',
    title: 'Funções e estruturas de dados',
    subtitle: 'Criando blocos reutilizáveis e manipulando arrays',
    description: 'Explore funções, arrays e objetos, com foco em reutilização de lógica.',
    topics: ['funções', 'arrays', 'objetos', 'JSON'],
    lessons: [
      {
        id: 'lesson-3-1',
        title: 'Funções e dados compostos',
        description: 'Use funções para reduzir repetição e manipule coleções de dados.',
        releaseDate: '2026-06-17',
        deadlineDate: '2026-06-24',
        video: 'https://www.youtube.com/embed/ke3Z1O5EKB4',
        exercises: [
          {
            id: 'ex1',
            type: 'radio',
            question: 'Qual estrutura permite armazenar pares chave-valor em JavaScript?',
            options: ['Array', 'Objeto', 'Set'],
            answer: 1,
            weight: 10
          },
          {
            id: 'ex2',
            type: 'text',
            question: 'Explique em uma frase como uma função ajuda a reduzir repetições no código.',
            placeholder: 'Resposta curta...',
            answer: ['reutilização', 'organização', 'manutenção'],
            weight: 15
          }
        ]
      }
    ]
  },
  {
    id: 'mod4',
    title: 'DOM, eventos e interatividade',
    subtitle: 'Conecte o usuário à página com código',
    description: 'Pratique a atualização da página com DOM e eventos do navegador.',
    topics: ['querySelector', 'event listeners', 'formulários', 'manipulação de elementos'],
    lessons: [
      {
        id: 'lesson-4-1',
        title: 'Interação com o DOM',
        description: 'Aprenda a reagir a cliques e a alterar o conteúdo da página em tempo real.',
        releaseDate: '2026-06-25',
        deadlineDate: '2026-07-02',
        video: 'https://www.youtube.com/embed/0ik6X4DJKCc',
        exercises: [
          {
            id: 'ex1',
            type: 'radio',
            question: 'Qual método seleciona o primeiro elemento que coincide com um seletor CSS?',
            options: ['getElementById', 'querySelector', 'getElementsByClassName'],
            answer: 1,
            weight: 10
          },
          {
            id: 'ex2',
            type: 'text',
            question: 'Descreva o que acontece quando um usuário clica em um botão com event listener.',
            placeholder: 'Explique em até 2 linhas...',
            answer: ['executa', 'função', 'evento', 'resposta'],
            weight: 15
          }
        ]
      }
    ]
  },
  {
    id: 'mod5',
    title: 'ES6 e código moderno com legados',
    subtitle: 'Novos recursos e como usá-los em projetos antigos',
    description: 'Estude recursos modernos e como integrar código novo em bases legadas.',
    topics: ['arrow functions', 'promises', 'fetch', 'compatibilidade'],
    lessons: [
      {
        id: 'lesson-5-1',
        title: 'ES6 e compatibilidade',
        description: 'Compreenda recursos modernos do JavaScript e sua aplicação em sistemas antigos.',
        releaseDate: '2026-07-03',
        deadlineDate: '2026-07-10',
        video: 'https://www.youtube.com/embed/1W0dJm9e1EU',
        exercises: [
          {
            id: 'ex1',
            type: 'code',
            question: 'Qual a saída de:\nconst soma = (x, y) => x + y; console.log(soma(4, 7));',
            placeholder: 'Resposta...',
            answer: '11',
            weight: 15
          },
          {
            id: 'ex2',
            type: 'radio',
            question: 'Qual recurso do ES6 facilita promessas e requisições assíncronas?',
            options: ['callback', 'fetch', 'var'],
            answer: 1,
            weight: 10
          }
        ]
      }
    ]
  },
  {
    id: 'mod6',
    title: 'Aprendizado ativo, neurociência e carreira',
    subtitle: 'Como fixar conhecimento e usar JS em entrevistas',
    description: 'Aplique técnicas de estudo baseadas em neurociência e resolva problemas reais.',
    topics: ['memória ativa', 'revisão espaçada', 'prática deliberada', 'carreira'],
    lessons: [
      {
        id: 'lesson-6-1',
        title: 'Neurociência e prática',
        description: 'Descubra como jovens fixam conhecimento com práticas sugeridas pela neurociência.',
        releaseDate: '2026-07-11',
        deadlineDate: '2026-07-18',
        video: 'https://www.youtube.com/embed/8BNIGaH7tq0',
        exercises: [
          {
            id: 'ex1',
            type: 'checkbox',
            question: 'Quais técnicas ajudam no aprendizado eficaz de programação?',
            options: ['Estudo passivo sem prática', 'Revisão com exercícios', 'Explicar para um colega', 'Só assistir vídeos sem testar'],
            answer: [1, 2],
            weight: 15
          },
          {
            id: 'ex2',
            type: 'text',
            question: 'Descreva brevemente como você usaria exercícios práticos para fixar JavaScript.',
            placeholder: 'Resposta...',
            answer: ['prática', 'projeto', 'revisão', 'errado'],
            weight: 15
          }
        ]
      }
    ]
  }
];

export const defaultSettings = {
  attemptLimit: 3,
  releaseFinal: false,
  weights: moduleDefinitions.reduce((result, module) => {
    result[module.id] = module.lessons.reduce(
      (sum, lesson) => sum + lesson.exercises.reduce((inner, exercise) => inner + exercise.weight, 0),
      0
    );
    return result;
  }, {})
};
