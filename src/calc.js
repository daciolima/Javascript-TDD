const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (a, b) => (b === 0 ? "Não é possível dividir por zero" : a / b);

export { soma, subtracao, multiplicacao, divisao };
