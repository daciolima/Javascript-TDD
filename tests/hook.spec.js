// Documentação da API do Chaijs: https://www.chaijs.com/

var expect = require("chai").expect;

describe("Hook", function () {
  var arr;

  // Roda uma vez antes do bloco
  before(function () {
    // Iniciar uma conexão com o banco;
    // criar um conjunto de dados
  });

  // Roda todas as vezes antes de cada Bloco
  beforeEach(function () {
    arr = [1, 2, 3, 4];
  });

  // Roda todas as vezes depois de cada Bloco
  afterEach(function () {});

  // Roda uma vez depois do bloco
  after(function () {
    // Fechar uma conexão com o banco;
    // Apagar um conjunto de dados
  });

  // Testar tipos ou se existe (smoke test)
  it("Espero que seja do tipo array", function () {
    expect(arr).to.be.a("array");
  });

  it("Espero  conter 4 numeros no array após adição do numeral 4", function () {
    arr.push(5);
    expect(arr).to.have.lengthOf(5);
  });

  it("Espero  não conter o valor 3 quando realizar o pop no array", function () {
    arr.pop();
    expect(arr).to.not.include(4);
  });

  it("Espero  ter o tamanho de 2 quando realizar o pop no array", function () {
    arr.pop();
    expect(arr).to.have.lengthOf(3);
  });

  it("Espero receber true ao usar pop no array", function () {
    expect(arr.pop() === 4).to.be.true;
  });
});

// SEQUÊNCIA
// - before
// - beforeEach
// - Teste1
// - afterEach
// - beforeEach
// - Teste2
// - afterEach
// - after
