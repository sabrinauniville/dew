{
  function verificacaoAprovacaoPorNotas() {
    const mediaParaAprovacao = 6;
    const mediaDeNotas = Number(
      prompt("Digite a média acadêmica do semestre: "),
    );
    if (mediaDeNotas >= mediaParaAprovacao) {
      // media das notas do acadêmico deve ser maior ou igual a média para aprovação
      return true;
    } else {
      console.log("Reprovado por média: ", mediaDeNotas);
      return false;
    }
  }

  //verificacaoAprovacaoPorNotas();

  function verificacaoAprovacaoPorFrequencia() {
    const porcentagemFrequenciaMinimaParaAprovacao = 75;
    const totalAulas = 72;
    const totalDeFaltas = Number(
      prompt("Digite o total de faltas do acadêmico no semestre: "),
    );
    const porcentagemFrequênciaTotal =
      ((totalAulas - totalDeFaltas) * 100) / totalAulas; // porcentagem da frequência do acadêmico

    if (
      porcentagemFrequênciaTotal >= porcentagemFrequenciaMinimaParaAprovacao
    ) {
      return true;
    } else {
      console.log(
        `Reprovado por frequência. Frequência total: ${parseInt(porcentagemFrequênciaTotal)}%`,
      ); //exemplo de template literals
      return false; // reprovado: as faltas devem ser menor ou igual a 25% do total de aulas
    }
  }

  //verificacaoAprovacaoPorFrequencia();

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

    //return verificacaoAprovacaoPorNotas() && verificacaoAprovacaoPorFrequencia === true ? true : false;
  }
  verificacaoDeAcademicoAprovado();
}
