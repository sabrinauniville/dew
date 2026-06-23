// Exercício 1 Sistema de Cadastro de Produtos
const produto = {
  nome: "Monitor",
  categoria: "Informática",
  preco: "899.90",
  estoque: 5,
};

// Conversão
produto.preco = Number(produto.preco);

// Validação
if (Number.isNaN(produto.preco)) {
  console.log("Preço inválido");
} else {
  function exibirProduto(produto) {
    console.log(`Produto: ${produto.nome}`);
    console.log(`Categoria: ${produto.categoria}`);
    console.log(`Preço: R$ ${produto.preco}`);
  }

  exibirProduto(produto);

  if (produto.estoque < 10) {
    console.log("\nEstoque baixo");
  } else {
    console.log("\nEstoque adequado");
  }

  console.log("\nPropriedades:");
  console.log(Object.keys(produto));

  console.log("\nValores:");
  console.log(Object.values(produto));

  console.log("\nTipos:");

  for (const propriedade in produto) {
    console.log(`${propriedade}: ${typeof produto[propriedade]}`);
  }
}

// Exercício 2 Sistema de Matrícula Acadêmica
const disciplinas = ["HTML", "CSS", "JavaScript"];

console.log("Disciplinas:");

for (let i = 0; i < disciplinas.length; i++) {
  console.log(disciplinas[i]);
}

console.log(`\nTotal: ${disciplinas.length}`);

if (disciplinas.includes("JavaScript")) {
  console.log("\nAluno cursa JavaScript");
} else {
  console.log("\nAluno não cursa JavaScript");
}

disciplinas.push("Programação Web");

console.log("\nPercorrendo disciplinas:");

for (let i = 0; i < disciplinas.length; i++) {
  if (disciplinas[i] === "") {
    continue;
  }

  console.log(disciplinas[i]);

  if (disciplinas[i] === "TCC") {
    console.log("Laço interrompido");
    break;
  }
}

// Exercício 3 Sistema de Biblioteca
const autores = "Machado de Assis,Clarice Lispector,Monteiro Lobato";

const listaAutores = autores.split(",");

console.log("Autores:");

for (let i = 0; i < listaAutores.length; i++) {
  console.log(listaAutores[i]);
}

const autorProcurado = "Clarice Lispector";

if (listaAutores.includes(autorProcurado)) {
  console.log("\nAutor encontrado");
} else {
  console.log("\nAutor não encontrado");
}

function criarLivro(titulo, autor) {
  return `Livro: ${titulo} | Autor: ${autor}`;
}

console.log("\n" + criarLivro("A Hora da Estrela", "Clarice Lispector"));

console.log("\nLista formatada:");
console.log(listaAutores.join(" | "));

// Exercício 4 Sistema de Controle Financeiro
const gastos = ["500", "350.50", "1000"];

function calcularTotal(lista) {
  let total = 0;

  for (let i = 0; i < lista.length; i++) {
    const valor = Number(lista[i]);

    if (Number.isNaN(valor)) {
      continue;
    }

    total += valor;
  }

  return total;
}

const total = calcularTotal(gastos);

console.log(`Total: R$ ${total.toFixed(2)}`);

if (total > 2000) {
  console.log("\nLimite ultrapassado");
} else {
  console.log("\nGastos dentro do limite");
}

// Exercício 5 Sistema Completo de Eventos
const evento = {
  nome: "Semana da Tecnologia",
  local: "Auditório",
  data: new Date("2026-08-20"),
  participantes: ["Ana", "Carlos", "Marcos"],
};

function exibirEvento(evento) {
  console.log(`Evento: ${evento.nome}`);

  console.log(`Local: ${evento.local}`);

  console.log(evento.data.toLocaleDateString("pt-BR"));

  console.log(`Participantes: ${evento.participantes.length}`);
}

exibirEvento(evento);

if (evento.participantes.length > 0) {
  console.log("\nParticipantes cadastrados");
} else {
  console.log("\nNenhum participante cadastrado");
}

console.log(`\nLocal cadastrado: ${evento.hasOwnProperty("local")}`);

console.log("\nPropriedades:");
console.log(Object.keys(evento));

console.log("\nValores:");
console.log(Object.values(evento));

console.log("\nTipos:");

for (const propriedade in evento) {
  if (Array.isArray(evento[propriedade])) {
    console.log(`${propriedade}: array`);
  } else {
    console.log(`${propriedade}: ${typeof evento[propriedade]}`);
  }
}
