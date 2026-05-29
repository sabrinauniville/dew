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
