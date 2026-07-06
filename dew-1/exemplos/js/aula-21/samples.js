// =====================================================================
// CLASSE
// =====================================================================

// Classe (modelo utilizado para criar objetos)
class SpaceAgency {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }

  // Método da classe
  // Internamente, este método é armazenado em SpaceAgency.prototype
  showThis() {
    console.log("This em um objeto criado a partir da classe:", this);
  }
}

// =====================================================================
// PROTOTYPE
// =====================================================================

// Adicionando um novo método ao prototype da classe.
// Todas as instâncias da classe poderão utilizar esse método.
SpaceAgency.prototype.showInfo = function () {
  console.log(
    `A agência espacial ${this.name} está localizada em ${this.country}.`,
  );
};

// =====================================================================
// OBJETO (INSTÂNCIA DA CLASSE)
// =====================================================================

// Objeto criado a partir da classe SpaceAgency.
const spaceBr = new SpaceAgency("Space BR", "Brasil");

// =====================================================================
// OBJETO LITERAL
// =====================================================================

// Objeto criado diretamente utilizando chaves ({}).
const nasa = {
  name: "NASA",
  country: "Estados Unidos",

  showThis: function () {
    console.log("This em um objeto literal:", this);
  },
};

// =====================================================================
// UTILIZAÇÃO DOS OBJETOS
// =====================================================================

console.log("===== Objeto criado a partir da classe =====");
spaceBr.showThis();
spaceBr.showInfo();

console.log(spaceBr);
console.log("");

console.log("===== Objeto literal =====");
nasa.showThis();

console.log(nasa);
console.log("");

console.log("===== Prototype da classe =====");
console.log(SpaceAgency.prototype);

// Observe que os métodos showThis() e showInfo()
// ficam armazenados no prototype da classe.

// =====================================================================
// COMPARAÇÃO ENTRE ES5 E ES6
// =====================================================================
/*

// FORMA ANTIGA (ES5)
function SpaceAgency(name, country) {
    this.name = name;
    this.country = country;


SpaceAgency.prototype.showInfo = function () {
    console.log(
        `A agência espacial ${this.name} está localizada em ${this.country}.`
    );
};

const spaceBr = new SpaceAgency("Space BR", "Brasil");

spaceBr.showInfo();

------------------------------------------------------------
// FORMA MODERNA (ES6)
class SpaceAgency {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }

    showInfo() {
        console.log(
            `A agência espacial ${this.name} está localizada em ${this.country}.`
        );
    }
}

const spaceBr = new SpaceAgency("Space BR", "Brasil");
spaceBr.showInfo();

------------------------------------------------------------

A sintaxe de classes (ES6) é apenas uma forma mais simples
de escrever código orientado a objetos.
Internamente, os métodos da classe continuam sendo armazenados
no prototype da classe.
Por isso, estas duas formas produzem praticamente o mesmo
resultado.

------------------------------------------------------------

*/

// =====================================================================
// SPREAD OPERATOR (...)
// =====================================================================
console.log("");
console.log("===== SPREAD OPERATOR =====");

// ---------------------------------------------------------------------
// 1. Spread em objetos
// Cria uma cópia do objeto e adiciona novas propriedades.
// ---------------------------------------------------------------------
const favoriteAgency = {
  ...nasa,
  favorite: true,
};
console.log("Objeto original:", nasa);
console.log("Cópia utilizando Spread:", favoriteAgency);

// ---------------------------------------------------------------------
// 2. Spread em arrays
// Espalha os elementos de um array dentro de outro.
// ---------------------------------------------------------------------
const technologies = ["JavaScript", "HTML", "CSS"];
const webTechnologies = [...technologies, "TypeScript", "Angular"];
console.log(webTechnologies);

// ---------------------------------------------------------------------
// 3. Spread em parâmetros de funções
// Espalha os elementos de um array como argumentos.
// ---------------------------------------------------------------------
const coordinates = [120, 350];
function showCoordinates(x, y) {
  console.log(`Coordenada X: ${x}`);
  console.log(`Coordenada Y: ${y}`);
}
showCoordinates(...coordinates);

// =====================================================================
// REST OPERATOR (...)
// =====================================================================
console.log("");
console.log("===== REST OPERATOR =====");

// ---------------------------------------------------------------------
// 1. Rest em parâmetros de funções
// Agrupa todos os argumentos recebidos em um único array.
// ---------------------------------------------------------------------
function showPlanets(...planets) {
  console.log("Planetas recebidos:", planets);
}
showPlanets("Terra", "Marte", "Júpiter", "Saturno");

// ---------------------------------------------------------------------
// 2. Rest em objetos (Destructuring)
// Agrupa todas as propriedades restantes em um novo objeto.
// ---------------------------------------------------------------------
const { name, ...otherAgencyData } = nasa;
console.log("Nome:", name);
console.log("Demais propriedades:", otherAgencyData);

// ---------------------------------------------------------------------
// 3. Rest em arrays (Destructuring)
// Agrupa os elementos restantes em um novo array.
// ---------------------------------------------------------------------
const [firstTechnology, ...otherTechnologies] = webTechnologies;
console.log("Primeira tecnologia:", firstTechnology);
console.log("Demais tecnologias:", otherTechnologies);
