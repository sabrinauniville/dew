const mediaDeNotasMinimaParaAprovacao = 6;
// Array de objetos
const academicos = [
  {
    nome: "Ana",
    mediaDeNotas: 7,
    totalDeFaltas: 19,
  },
  {
    nome: "Carlos",
    mediaDeNotas: 5,
    totalDeFaltas: 18,
  },
  {
    nome: "João",
    mediaDeNotas: 9,
    totalDeFaltas: 6,
  },
];

// Exercício 1
// Objetivo: percorrer um array de objetos e verificar quais acadêmicos atingiram a média mínima para aprovação
{
  console.log("\nExercício 1\n");
  // Percorre todos os acadêmicos do array e verifica a média de notas de cada um
  for (let i = 0; i < academicos.length; i++) {
    const academico = academicos[i];

    if (academico.mediaDeNotas >= mediaDeNotasMinimaParaAprovacao) {
      console.log(`${academico.nome} aprovado`);
    } else {
      console.log(`${academico.nome} reprovado`);
    }
  }
}

// Exercício 2
// Objetivo: utilizar funções, arrays, objetos e laços de repetição para automatizar a validação de aprovação dos acadêmicos
{
  function verificacaoAprovacaoPorNotas(
    academico,
    mediaDeNotasMinimaParaAprovacao,
  ) {
    // Obtém a média de notas armazenada no objeto do acadêmico
    const mediaDeNotas = academico.mediaDeNotas || 0;
    // Exemplo do operador OR || caso mediaDeNotas seja undefined, null, "", false ou 0, será utilizado 0 como valor padrão

    if (mediaDeNotas >= mediaDeNotasMinimaParaAprovacao) {
      // O acadêmico é aprovado por nota quando sua média é maior ou igual à média mínima exigida
      return true;
    } else {
      console.log(
        `Acadêmico(a) ${academico.nome} reprovado(a) por média de notas de ${parseFloat(mediaDeNotas)}`,
      );
      return false;
    }
  }

  function verificacaoAprovacaoPorFrequencia(academico) {
    const porcentagemFrequenciaMinimaParaAprovacao = 75;
    const totalAulas = 72;

    // Obtém do objeto a quantidade de faltas registrada para o acadêmico
    const totalDeFaltas = academico.totalDeFaltas;

    //Calcula a porcentagem de frequência com base no total de aulas e faltas
    const porcentagemFrequenciaTotal =
      ((totalAulas - totalDeFaltas) * 100) / totalAulas;

    // O acadêmico é aprovado por frequência quando possui pelo menos 75% de presença
    if (
      porcentagemFrequenciaTotal >= porcentagemFrequenciaMinimaParaAprovacao
    ) {
      return true;
    } else {
      console.log(
        `Acadêmico(a) ${academico.nome} reprovado(a) por frequência de ${parseInt(porcentagemFrequenciaTotal)}%`,
      );
      return false;
    }
  }

  function verificacaoDeAcademicoAprovado(
    academico,
    mediaDeNotasMinimaParaAprovacao,
  ) {
    // O acadêmico será aprovado somente se passar nos critérios de nota e frequência
    if (
      verificacaoAprovacaoPorNotas(
        academico,
        mediaDeNotasMinimaParaAprovacao,
      ) &&
      verificacaoAprovacaoPorFrequencia(academico)
    ) {
      console.log(`Acadêmico(a) ${academico.nome} aprovado(a).`);
      return true;
    } else {
      return false;
    }
  }

  console.log("\nExercício 2\n");
  for (let i = 0; i < academicos.length; i++) {
    const academico = academicos[i]; // Em cada repetição, recupera um acadêmico diferente do array, baseado no valor da variável de controle do loop

    verificacaoDeAcademicoAprovado(academico, mediaDeNotasMinimaParaAprovacao);
  }
}
