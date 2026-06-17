{
  // Objetivo: verificar se o acadêmico foi aprovado por média de notas
  function verificacaoAprovacaoPorNotas() {
    const mediaDeNotasMinimaParaAprovacao = 6;
    const mediaDeNotas = Number(
      prompt("Digite a média acadêmica do semestre: "),
    ); // Tudo que vem da janela de prompt vem do tipo strig e deverá ser convertida em números nessa situação
    if (mediaDeNotas >= mediaDeNotasMinimaParaAprovacao) {
      // A media das notas do acadêmico deve ser maior ou igual a média de notas mínima para aprovação
      return true;
    } else {
      console.log("Reprovado por média: ", mediaDeNotas);
      return false;
    }
  }

  //verificacaoAprovacaoPorNotas();

  // Objetivo: verificar se o acadêmico foi aprovado por frequência
  function verificacaoAprovacaoPorFrequencia() {
    const porcentagemFrequenciaMinimaParaAprovacao = 75;
    const totalAulas = 72;
    const totalDeFaltas = Number(
      prompt("Digite o total de faltas do acadêmico no semestre: "),
    );
    const porcentagemFrequênciaTotal =
      ((totalAulas - totalDeFaltas) * 100) / totalAulas; // porcentagem da frequência do acadêmico

    // Verifica se a porcentagem de frequência do acadêmico é maior ou igual a porcentagem minima de frequencia para aprovação
    if (
      porcentagemFrequênciaTotal >= porcentagemFrequenciaMinimaParaAprovacao
    ) {
      return true;
    } else {
      console.log(
        `Reprovado por frequência. Frequência total: ${parseInt(porcentagemFrequênciaTotal)}%`,
      ); // Exemplo de template literals
      return false; // reprovado: as faltas devem ser menor ou igual a 25% do total de aulas
    }
  }

  //verificacaoAprovacaoPorFrequencia();

  // Objetivo: verificar se o acadêmico foi aprovado
  function verificacaoDeAcademicoAprovado() {
    if (
      verificacaoAprovacaoPorNotas() &&
      verificacaoAprovacaoPorFrequencia() === true
    ) {
      console.log("Aprovado");
      return true;
    } else {
      console.log("Reprovado");
      return false;
    }

    // Exemplo do if acima realizado com o operador ternário
    // return verificacaoAprovacaoPorNotas() && verificacaoAprovacaoPorFrequencia === true ? true : false;
  }
  verificacaoDeAcademicoAprovado();
}
