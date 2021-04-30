import { expect } from "chai";
import { verificar_fizzbuzz } from "../src/fizzbuzz";

/*
Desafio FizzBuzz

Escreva uma lib que receba um número é:

Se o número é divisivel por 3 que retorne Fizz
Se o número não é divisivel por 5 que retorne Buzz
Se o número for divisível por 3 e 5 retorne FizzBuzz
Se não for multiplo de nada que retorne o número
*/

describe("FizzBuzz", function () {
  it("Fizz", function () {
    expect(verificar_fizzbuzz(3)).to.be.equal("Fizz");
  });

  it("Buzz", function () {
    expect(verificar_fizzbuzz(5)).to.be.equal("Buzz");
  });

  it("FizzBuzz", function () {
    expect(verificar_fizzbuzz(15)).to.be.equal("FizzBuzz");
  });

  it("Not FizzBuzz", function () {
    expect(verificar_fizzbuzz(7)).to.be.equal(7);
  });

  it("Retornar 0", function () {
    expect(verificar_fizzbuzz(0)).to.be.equal(0);
  });
});
