import { expect } from "chai";
import { soma, subtracao, multiplicacao, divisao } from "../src/calc";

describe("Calc", () => {
  // Smoke tests
  describe("Smoke Test", () => {
    it("Espero existir o metodo soma", () => {
      expect(soma).to.exist;
      expect(soma).to.be.a("function");
    });

    it("Espero existir o metodo subtracao", () => {
      expect(subtracao).to.exist;
      expect(subtracao).to.be.a("function");
    });

    it("Espero existir o metodo multiplicacao", () => {
      expect(multiplicacao).to.exist;
      expect(multiplicacao).to.be.a("function");
    });

    it("Espero existir o metodo divisao", () => {
      expect(divisao).to.exist;
      expect(divisao).to.be.a("function");
    });
  });

  describe("Soma", () => {
    it("Espero que a soma de 2 + 2 retorne 4", () => {
      expect(soma(2, 2)).to.equal(4);
    });
  });

  describe("Subtracao", () => {
    it("Espero que a soma de 2 - 2 retorne 0", () => {
      expect(subtracao(2, 2)).to.equal(0);
    });
  });

  describe("Multiplicacao", () => {
    it("Espero que a multiplicacao de 6 * 6 retorne 30", () => {
      expect(multiplicacao(6, 6)).to.equal(36);
    });
  });

  describe("Soma", () => {
    it("Espero que a divisao de 10 / 2 retorne 5", () => {
      expect(divisao(10, 2)).to.equal(5);
    });

    it("Espero que a divisao por zero retorne mensagem de não divisao", () => {
      expect(divisao(10, 0)).to.equal("Não é possível dividir por zero");
    });
  });
});
