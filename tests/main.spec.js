// describe serve para separar os blocos de teste ou classes
describe("Main", function () {
  describe("Metodo A", function () {
    // Contextos de testes
    context("Caso 1", function () {
      // it de fato é o teste
      it("Deve realizar soma", function () {
        // Espera que aconteça => Realizar uma soma
        // Entrada de dados / método => (2, 2)
        // Espera retornar => (4) => true
      });
    });
    context("Caso 2", function () {
      // it de fato é o teste
      it("Deve realizar subtrair", function () {
        // Espera que aconteça => Realizar uma soma
        // Entrada de dados / método => (2, 2)
        // Espera retornar => (4) => true
      });
      it("Deve realizar multiplicar", function () {
        // Espera que aconteça => Realizar uma soma
        // Entrada de dados / método => (2, 2)
        // Espera retornar => (4) => true
      });
    });
  }),
    describe("Metodo B", function () {
      context("Caso 1", function () {
        // it de fato é o teste
        it("Deve realizar dividir", function () {
          // Espera que aconteça => Realizar uma soma
          // Entrada de dados / método => (2, 2)
          // Espera retornar => (4) => true
        });
      });
    });
});
