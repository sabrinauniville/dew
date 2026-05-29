/* Exercício 1 */
let number1 = prompt("Digite o primeiro número:");
let number2 = prompt("Digite o segundo número:");
let sum = Number(number1) + Number(number2);
confirm("O resultado é: " + sum);

/* Exercício 2 */
function aprovacaoPorMediaSemestral(mediaDasNotas) {
  if (mediaDasNotas >= 6) {
    return true;
  } else {
    return false;
  }
}

/* Teste 1 */
aprovacaoPorMediaSemestral(8);

/* Teste 2 */
aprovacaoPorMediaSemestral(4);

/* Exercício 3 */
function aprovacaoPorFrequenciaSemestral(
  totalDeAulasSemestre,
  totalDeFaltasSemestre,
) {
  const porcentagemDeFrequenciaSemestral =
    (totalDeAulasSemestre - totalDeFaltasSemestre) / totalDeAulasSemestre;

  if (porcentagemDeFrequenciaSemestral >= 0.75) {
    return true;
  } else {
    return false;
  }
}

/* Teste 1 */
aprovacaoPorFrequenciaSemestral(36, 7);

/* Teste 2 */
aprovacaoPorFrequenciaSemestral(36, 13);

/* Exercício 4 */
function aprovacaoDisciplina(
  mediaSemestral,
  totalDeAulasSemestre,
  totalDeFaltasSemestre,
) {
  const aprovadoPorMedia = aprovacaoPorMediaSemestral(mediaSemestral);
  const aprovadoPorFrequencia = aprovacaoPorFrequenciaSemestral(
    totalDeAulasSemestre,
    totalDeFaltasSemestre,
  );

  if (aprovadoPorMedia === true && aprovadoPorFrequencia === true) {
    return true;
  } else {
    return false;
  }
}

/* Teste 1 */
aprovacaoDisciplina(8, 36, 7);

/* Teste 2 */
aprovacaoDisciplina(5, 36, 13);
