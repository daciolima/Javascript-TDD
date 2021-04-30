function soma(a, b) {
  return a + b;
}

// named export
// Ter vários exports dentro um mesmo arquivo
// Só pode ser chamado com o mesmo nome
// import precisa das {}
export function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

const PI = 3.14;

export { multiplicar as mult, dividir, PI };

// Método principal
// Só pode ter um default por arquivo
// importar com qualquer nome e não precisa utilizar {}
export default soma;
